/*
 * Copyright © 2015-2018 Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author		Aeneas Rekkas <aeneas+oss@aeneas.io>
 * @Copyright 	2015-2018 Aeneas Rekkas <aeneas+oss@aeneas.io>
 * @license 	Apache-2.0
 *
 */

package server

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/gorilla/context"
	"github.com/julienschmidt/httprouter"
	"github.com/meatballhat/negroni-logrus"
	"github.com/ory/graceful"
	"github.com/ory/hades/authentication"
	"github.com/ory/hades/policy"
	"github.com/ory/hades/role"
	"github.com/ory/hades/warden"
	"github.com/ory/herodot"
	"github.com/ory/ladon"
	"github.com/rs/cors"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/urfave/negroni"
)

func parseCorsOptions() cors.Options {
	allowCredentials, _ := strconv.ParseBool(viper.GetString("CORS_ALLOWED_CREDENTIALS"))
	debug, _ := strconv.ParseBool(viper.GetString("CORS_DEBUG"))
	maxAge, _ := strconv.Atoi(viper.GetString("CORS_MAX_AGE"))
	return cors.Options{
		AllowedOrigins:   strings.Split(viper.GetString("CORS_ALLOWED_ORIGINS"), ","),
		AllowedMethods:   strings.Split(viper.GetString("CORS_ALLOWED_METHODS"), ","),
		AllowedHeaders:   strings.Split(viper.GetString("CORS_ALLOWED_HEADERS"), ","),
		ExposedHeaders:   strings.Split(viper.GetString("CORS_EXPOSED_HEADERS"), ","),
		AllowCredentials: allowCredentials,
		MaxAge:           maxAge,
		Debug:            debug,
	}
}

func RunServe(logger *logrus.Logger) func(cmd *cobra.Command, args []string) {
	return func(cmd *cobra.Command, args []string) {
		router := httprouter.New()

		m, err := newManagers(viper.GetString("DATABASE_URL"), logger)
		if err != nil {
			logger.
				WithError(err).
				Fatal("Unable to initialise backends")
		}

		authenticators := map[string]authentication.Authenticator{
			"subjects": authentication.NewPlaintextAuthentication(),
			"oauth2": authentication.NewOAuth2IntrospectionAuthentication(
				viper.GetString("OAUTH2_CLIENT_ID"),
				viper.GetString("OAUTH2_CLIENT_SECRET"),
				viper.GetString("OAUTH2_TOKEN_URL"),
				viper.GetString("OAUTH2_INTROSPECTION_URL"),
				strings.Split(viper.GetString("OAUTH2_SCOPES"), ","),
			),
		}

		decider := &ladon.Ladon{
			Manager:     m.policyManager,
			AuditLogger: &warden.AuditLoggerLogrus{Logger: logger},
			Matcher:     ladon.DefaultMatcher,
		}
		firewall := warden.NewWarden(decider, m.roleManager, logger)
		writer := herodot.NewJSONWriter(logger)
		roleHandler := role.NewHandler(m.roleManager, writer)
		policyHandler := policy.NewHandler(m.policyManager, writer)
		wardenHandler := warden.NewHandler(writer, firewall, authenticators)

		roleHandler.SetRoutes(router)
		policyHandler.SetRoutes(router)
		wardenHandler.SetRoutes(router)

		n := negroni.New()
		n.Use(negronilogrus.NewMiddlewareFromLogger(logger, "hades"))
		n.UseHandler(router)
		corsHandler := cors.New(parseCorsOptions()).Handler(n)

		address := fmt.Sprintf("%s:%s", viper.GetString("HOST"), viper.GetString("PORT"))
		var srv = graceful.WithDefaults(&http.Server{
			Addr:    address,
			Handler: context.ClearHandler(corsHandler),
		})

		err = graceful.Graceful(func() error {
			logger.Infof("Setting up http server on %s", address)
			return srv.ListenAndServe()
		}, srv.Shutdown)

		logger.
			WithError(err).
			Fatal("Could not gracefully run server")
	}
}
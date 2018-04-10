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

package authentication

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"

	"github.com/pkg/errors"
	"golang.org/x/oauth2/clientcredentials"
)

type OAuth2Session struct {
	// Here, it's subject
	*DefaultSession
	Scope     string `json:"scope,omitempty"`
	ClientID  string `json:"client_id,omitempty"`
	ExpiresAt int64  `json:"exp,omitempty"`
	IssuedAt  int64  `json:"iat,omitempty"`
	NotBefore int64  `json:"nbf,omitempty"`
	Username  string `json:"username,omitempty"`
	Audience  string `json:"aud,omitempty"`
	Issuer    string `json:"iss,omitempty"`
}

type introspectionResponse struct {
	Active   bool   `json:"active"`
	Scope    string `json:"scope,omitempty"`
	ClientID string `json:"client_id,omitempty"`
	// Here, it's sub
	Subject   string `json:"sub,omitempty"`
	ExpiresAt int64  `json:"exp,omitempty"`
	IssuedAt  int64  `json:"iat,omitempty"`
	NotBefore int64  `json:"nbf,omitempty"`
	Username  string `json:"username,omitempty"`
	Audience  string `json:"aud,omitempty"`
	Issuer    string `json:"iss,omitempty"`
}

type OAuth2IntrospectionAuthentication struct {
	client           *http.Client
	introspectionURL string
}

type introspectionRequest struct {
	// Token is the token to introspect.
	Token string `json:"token"`

	// Scopes is an array of scopes that are required.
	Scopes []string `json:"scopes"`
}

func NewOAuth2Session() *OAuth2Session {
	return &OAuth2Session{
		DefaultSession: new(DefaultSession),
	}
}

func NewOAuth2IntrospectionAuthentication(clientID, clientSecret, tokenURL, introspectionURL string, scopes []string) *OAuth2IntrospectionAuthentication {
	c := clientcredentials.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		TokenURL:     tokenURL,
		Scopes:       scopes,
	}

	return &OAuth2IntrospectionAuthentication{
		client:           c.Client(context.Background()),
		introspectionURL: introspectionURL,
	}
}

func (a *OAuth2IntrospectionAuthentication) Authenticate(r *http.Request) (Session, error) {
	var token introspectionRequest

	err := json.NewDecoder(r.Body).Decode(&token)
	if err != nil || token.Token == "" {
		return nil, errors.WithStack(ErrorNotResponsible)
	}

	body, err := json.Marshal(token)
	if err != nil {
		return nil, errors.WithStack(err)
	}

	req, err := http.NewRequest("POST", a.introspectionURL, bytes.NewBuffer(body))
	if err != nil {
		return nil, errors.WithStack(err)
	}

	resp, err := a.client.Do(req)
	if err != nil {
		return nil, errors.WithStack(err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, errors.Errorf("Introspection returned status code %d but expected %d", resp.StatusCode, http.StatusOK)
	}

	var ir introspectionResponse
	if err := json.NewDecoder(resp.Body).Decode(&ir); err != nil {
		return nil, errors.WithStack(err)
	}

	if !ir.Active {
		return nil, errors.WithStack(ErrUnauthorized)
	}

	return &OAuth2Session{
		DefaultSession: &DefaultSession{
			Subject: ir.Subject,
		},
		Scope:     ir.Scope,
		ClientID:  ir.ClientID,
		ExpiresAt: ir.ExpiresAt,
		IssuedAt:  ir.IssuedAt,
		NotBefore: ir.NotBefore,
		Username:  ir.Username,
		Audience:  ir.Audience,
		Issuer:    ir.Issuer,
	}, nil
}

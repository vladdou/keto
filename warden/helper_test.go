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
 * @copyright 	2015-2018 Aeneas Rekkas <aeneas+oss@aeneas.io>
 * @license 	Apache-2.0
 */

package warden_test

import (
	"testing"
	"time"
	"os"

	"github.com/ory/ladon"
	"github.com/sirupsen/logrus"
	"github.com/ory/hades/warden"
	"github.com/ory/hades/roles"
	"github.com/ory/hades/role"
)

var (
	accessRequestTestCases = []struct {
		req       *warden.AccessRequest
		expectErr bool
	}{
		{
			req: &warden.AccessRequest{
				Subject:  "alice",
				Resource: "other-thing",
				Action:   "create",
				Context:  ladon.Context{},
			},
			expectErr: true,
		},
		{
			req: &warden.AccessRequest{
				Subject:  "alice",
				Resource: "matrix",
				Action:   "delete",
				Context:  ladon.Context{},
			},
			expectErr: true,
		},
		{
			req: &warden.AccessRequest{
				Subject:  "alice",
				Resource: "matrix",
				Action:   "create",
				Context:  ladon.Context{},
			},
			expectErr: false,
		},
	}
	wardens = map[string]warden.Firewall{}
)

func TestMain(m *testing.M) {
	wardens["local"] = &warden.LocalWarden{
		L: logrus.New(),
		Roles: &role.MemoryManager{
			Roles: map[string]role.Role{
				"group1": {
					ID:      "group1",
					Members: []string{"ken"},
				},
			},
		},
		Issuer:              "tests",
		AccessTokenLifespan: time.Hour,
	}

	os.Exit(m.Run())
}

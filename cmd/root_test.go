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

package cmd

import (
	"fmt"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/akutz/gotil"
	"github.com/pborman/uuid"
	"github.com/stretchr/testify/assert"
)

func TestExecute(t *testing.T) {
	var osArgs = make([]string, len(os.Args))
	var path = filepath.Join(os.TempDir(), fmt.Sprintf("keto-%s.yml", uuid.New()))
	port := gotil.RandomTCPPort()
	os.Setenv("DATABASE_URL", "memory")
	os.Setenv("PORT", fmt.Sprintf("%d", port))
	copy(osArgs, os.Args)

	for _, c := range []struct {
		args      []string
		wait      func() bool
		expectErr bool
	}{
		{
			args: []string{"serve"},
			wait: func() bool {
				time.Sleep(time.Second * 5)
				return !gotil.IsTCPPortAvailable(port)
			},
		},
		{args: []string{"roles", "list"}},
	} {
		c.args = append(c.args, []string{"--url", fmt.Sprintf("http://127.0.0.1:%d", port), "--config", path}...)
		RootCmd.SetArgs(c.args)

		t.Run(fmt.Sprintf("command=%v", c.args), func(t *testing.T) {
			if c.wait != nil {
				go func() {
					assert.Nil(t, RootCmd.Execute())
				}()
			}

			if c.wait != nil {
				var count = 0
				for c.wait() {
					t.Logf("Port not open yet, retrying attempt #%d...", count)
					count++
					if count > 200 {
						t.FailNow()
					}
					time.Sleep(time.Second * 2)
				}
			} else {
				err := RootCmd.Execute()
				if c.expectErr {
					assert.Error(t, err)
				} else {
					assert.NoError(t, err)
				}
			}
		})
	}
}

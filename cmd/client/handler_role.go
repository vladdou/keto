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

package client

import (
	"fmt"
	"net/http"

	hydra "github.com/ory/hydra/sdk/go/hydra/swagger"
	"github.com/spf13/cobra"
)

type RoleHandler struct {
}

func (h *RoleHandler) newGroupManager(cmd *cobra.Command) *hydra.WardenApi {
	client := hydra.NewWardenApiWithBasePath(h.Config.GetClusterURLWithoutTailingSlash())
	client.Configuration.Transport = h.Config.OAuth2Client(cmd).Transport
	if term, _ := cmd.Flags().GetBool("fake-tls-termination"); term {
		client.Configuration.DefaultHeader["X-Forwarded-Proto"] = "https"
	}

	return client
}

func newRoleHandler() *RoleHandler {
	return &RoleHandler{}
}

func (h *RoleHandler) CreateGroup(cmd *cobra.Command, args []string) {
	if len(args) != 1 {
		fmt.Print(cmd.UsageString())
		return
	}
	m := h.newGroupManager(cmd)

	_, response, err := m.CreateGroup(hydra.Group{Id: args[0]})
	checkResponse(response, err, http.StatusCreated)
	fmt.Printf("Group %s created.\n", args[0])
}

func (h *RoleHandler) DeleteGroup(cmd *cobra.Command, args []string) {
	if len(args) != 1 {
		fmt.Print(cmd.UsageString())
		return
	}

	m := h.newGroupManager(cmd)
	response, err := m.DeleteGroup(args[0])
	checkResponse(response, err, http.StatusNoContent)
	fmt.Printf("Group %s deleted.\n", args[0])
}

func (h *RoleHandler) AddMembers(cmd *cobra.Command, args []string) {
	if len(args) < 2 {
		fmt.Print(cmd.UsageString())
		return
	}

	m := h.newGroupManager(cmd)
	response, err := m.AddMembersToGroup(args[0], hydra.GroupMembers{Members: args[1:]})
	checkResponse(response, err, http.StatusNoContent)
	fmt.Printf("Members %v added to group %s.\n", args[1:], args[0])
}

func (h *RoleHandler) RemoveMembers(cmd *cobra.Command, args []string) {
	if len(args) < 2 {
		fmt.Print(cmd.UsageString())
		return
	}

	m := h.newGroupManager(cmd)
	response, err := m.RemoveMembersFromGroup(args[0], hydra.GroupMembers{Members: args[1:]})
	checkResponse(response, err, http.StatusNoContent)
	fmt.Printf("Members %v removed from group %s.\n", args[1:], args[0])
}

func (h *RoleHandler) FindGroups(cmd *cobra.Command, args []string) {
	if len(args) != 1 {
		fmt.Print(cmd.UsageString())
		return
	}

	m := h.newGroupManager(cmd)
	groups, response, err := m.ListGroups(args[0], 500, 0)
	checkResponse(response, err, http.StatusOK)
	formatResponse(groups)
}

func (h *RoleHandler) ListGroups(cmd *cobra.Command, args []string) {
	if len(args) != 1 {
		fmt.Print(cmd.UsageString())
		return
	}

	m := h.newGroupManager(cmd)
	groups, response, err := m.ListGroups("", 500, 0)
	checkResponse(response, err, http.StatusOK)
	formatResponse(groups)
}

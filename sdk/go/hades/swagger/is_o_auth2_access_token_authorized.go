/*
 * Package main ORY Hades
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type IsOAuth2AccessTokenAuthorized struct {

	// Action is the action that is requested on the resource.
	Action string `json:"action,omitempty"`

	// Context is the request's environmental context.
	Context map[string]interface{} `json:"context,omitempty"`

	// Resource is the resource that access is requested to.
	Resource string `json:"resource,omitempty"`

	// Scopes is an array of scopes that are required.
	Scopes []string `json:"scopes,omitempty"`

	// Token is the token to introspect.
	Token string `json:"token,omitempty"`
}
/*
 * Package main ORY Hades
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

// swager:model authorizedBaseRequest
type SwaggerWardenBaseRequest struct {

	// Action is the action that is requested on the resource.
	Action string `json:"action,omitempty"`

	// Context is the request's environmental context.
	Context map[string]interface{} `json:"context,omitempty"`

	// Resource is the resource that access is requested to.
	Resource string `json:"resource,omitempty"`
}
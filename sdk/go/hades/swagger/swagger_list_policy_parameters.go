/*
 * Package main ORY Hades
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type SwaggerListPolicyParameters struct {

	// The maximum amount of policies returned. in: query
	Limit int64 `json:"limit,omitempty"`

	// The offset from where to start looking. in: query
	Offset int64 `json:"offset,omitempty"`
}

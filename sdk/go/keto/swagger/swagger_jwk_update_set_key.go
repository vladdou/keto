/*
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type SwaggerJwkUpdateSetKey struct {
	Body JsonWebKey `json:"Body,omitempty"`

	// The kid of the desired key in: path
	Kid string `json:"kid"`

	// The set in: path
	Set string `json:"set"`
}

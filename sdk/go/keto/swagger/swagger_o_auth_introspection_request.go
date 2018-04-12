/*
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type SwaggerOAuthIntrospectionRequest struct {

	// An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.  in: formData
	Scope string `json:"scope,omitempty"`

	// The string value of the token. For access tokens, this is the \"access_token\" value returned from the token endpoint defined in OAuth 2.0 [RFC6749], Section 5.1. This endpoint DOES NOT accept refresh tokens for validation.
	Token string `json:"token"`
}

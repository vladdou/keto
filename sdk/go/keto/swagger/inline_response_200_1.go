/*
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type InlineResponse2001 struct {

	// The access token issued by the authorization server.
	AccessToken string `json:"access_token,omitempty"`

	// The lifetime in seconds of the access token.  For example, the value \"3600\" denotes that the access token will expire in one hour from the time the response was generated.
	ExpiresIn int64 `json:"expires_in,omitempty"`

	// To retrieve a refresh token request the id_token scope.
	IdToken int64 `json:"id_token,omitempty"`

	// The refresh token, which can be used to obtain new access tokens. To retrieve it add the scope \"offline\" to your access token request.
	RefreshToken string `json:"refresh_token,omitempty"`

	// The scope of the access token
	Scope int64 `json:"scope,omitempty"`

	// The type of the token issued
	TokenType string `json:"token_type,omitempty"`
}

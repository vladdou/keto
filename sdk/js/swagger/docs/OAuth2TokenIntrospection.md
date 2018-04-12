# SwaggerJsClient.OAuth2TokenIntrospection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Active is a boolean indicator of whether or not the presented token is currently active.  The specifics of a token&#39;s \&quot;active\&quot; state will vary depending on the implementation of the authorization server and the information it keeps about its tokens, but a \&quot;true\&quot; value return for the \&quot;active\&quot; property will generally indicate that a given token has been issued by this authorization server, has not been revoked by the resource owner, and is within its given time window of validity (e.g., after its issuance time and before its expiration time). | [optional] 
**aud** | **String** | ClientID is a service-specific string identifier or list of string identifiers representing the intended audience for this token. | [optional] 
**clientId** | **String** | ClientID is aclient identifier for the OAuth 2.0 client that requested this token. | [optional] 
**exp** | **Number** | Expires at is an integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire. | [optional] 
**ext** | **{String: Object}** | Extra is arbitrary data set by the session. | [optional] 
**iat** | **Number** | Issued at is an integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued. | [optional] 
**iss** | **String** | Issuer is a string representing the issuer of this token | [optional] 
**nbf** | **Number** | NotBefore is an integer timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token is not to be used before. | [optional] 
**scope** | **String** | Scope is a JSON string containing a space-separated list of scopes associated with this token. | [optional] 
**sub** | **String** | Subject of the token, as defined in JWT [RFC7519]. Usually a machine-readable identifier of the resource owner who authorized this token. | [optional] 
**username** | **String** | Username is a human-readable identifier for the resource owner who authorized this token. | [optional] 



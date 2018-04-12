/**
 * 
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ConsentRequestAcceptance', 'model/ConsentRequestRejection', 'model/InlineResponse2001', 'model/InlineResponse401', 'model/JsonWebKeySet', 'model/OAuth2Client', 'model/OAuth2ConsentRequest', 'model/OAuth2TokenIntrospection', 'model/SwaggeruserinfoResponsePayload', 'model/WellKnown'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConsentRequestAcceptance'), require('../model/ConsentRequestRejection'), require('../model/InlineResponse2001'), require('../model/InlineResponse401'), require('../model/JsonWebKeySet'), require('../model/OAuth2Client'), require('../model/OAuth2ConsentRequest'), require('../model/OAuth2TokenIntrospection'), require('../model/SwaggeruserinfoResponsePayload'), require('../model/WellKnown'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.OAuth2Api = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.ConsentRequestAcceptance, root.SwaggerJsClient.ConsentRequestRejection, root.SwaggerJsClient.InlineResponse2001, root.SwaggerJsClient.InlineResponse401, root.SwaggerJsClient.JsonWebKeySet, root.SwaggerJsClient.OAuth2Client, root.SwaggerJsClient.OAuth2ConsentRequest, root.SwaggerJsClient.OAuth2TokenIntrospection, root.SwaggerJsClient.SwaggeruserinfoResponsePayload, root.SwaggerJsClient.WellKnown);
  }
}(this, function(ApiClient, ConsentRequestAcceptance, ConsentRequestRejection, InlineResponse2001, InlineResponse401, JsonWebKeySet, OAuth2Client, OAuth2ConsentRequest, OAuth2TokenIntrospection, SwaggeruserinfoResponsePayload, WellKnown) {
  'use strict';

  /**
   * OAuth2 service.
   * @module api/OAuth2Api
   * @version Latest
   */

  /**
   * Constructs a new OAuth2Api. 
   * @alias module:api/OAuth2Api
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acceptOAuth2ConsentRequest operation.
     * @callback module:api/OAuth2Api~acceptOAuth2ConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept a consent request
     * Call this endpoint to accept a consent request. This usually happens when a user agrees to give access rights to an application.   The consent request id is usually transmitted via the URL query &#x60;consent&#x60;. For example: &#x60;http://consent-app.mydomain.com/?consent&#x3D;1234abcd&#x60;   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;accept\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id 
     * @param {module:model/ConsentRequestAcceptance} body 
     * @param {module:api/OAuth2Api~acceptOAuth2ConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.acceptOAuth2ConsentRequest = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acceptOAuth2ConsentRequest");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling acceptOAuth2ConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}/accept', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createOAuth2Client operation.
     * @callback module:api/OAuth2Api~createOAuth2ClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an OAuth 2.0 client
     * If you pass &#x60;client_secret&#x60; the secret will be used, otherwise a random secret will be generated. The secret will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somwhere safe.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;create\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {module:model/OAuth2Client} body 
     * @param {module:api/OAuth2Api~createOAuth2ClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2Client}
     */
    this.createOAuth2Client = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOAuth2Client");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OAuth2Client;

      return this.apiClient.callApi(
        '/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOAuth2Client operation.
     * @callback module:api/OAuth2Api~deleteOAuth2ClientCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an OAuth 2.0 Client
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;delete\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;delete\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Client.
     * @param {module:api/OAuth2Api~deleteOAuth2ClientCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOAuth2Client = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOAuth2Client");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/clients/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuth2Client operation.
     * @callback module:api/OAuth2Api~getOAuth2ClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an OAuth 2.0 Client.
     * This endpoint never returns passwords.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients:&lt;some-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Client.
     * @param {module:api/OAuth2Api~getOAuth2ClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2Client}
     */
    this.getOAuth2Client = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOAuth2Client");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OAuth2Client;

      return this.apiClient.callApi(
        '/clients/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOAuth2ConsentRequest operation.
     * @callback module:api/OAuth2Api~getOAuth2ConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2ConsentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive consent request information
     * Call this endpoint to receive information on consent requests. The consent request id is usually transmitted via the URL query &#x60;consent&#x60;. For example: &#x60;http://consent-app.mydomain.com/?consent&#x3D;1234abcd&#x60;   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id The id of the OAuth 2.0 Consent Request.
     * @param {module:api/OAuth2Api~getOAuth2ConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2ConsentRequest}
     */
    this.getOAuth2ConsentRequest = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOAuth2ConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OAuth2ConsentRequest;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWellKnown operation.
     * @callback module:api/OAuth2Api~getWellKnownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WellKnown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Server well known configuration
     * The well known endpoint an be used to retrieve information for OpenID Connect clients. We encourage you to not roll your own OpenID Connect client but to use an OpenID Connect client library instead. You can learn more on this flow at https://openid.net/specs/openid-connect-discovery-1_0.html
     * @param {module:api/OAuth2Api~getWellKnownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WellKnown}
     */
    this.getWellKnown = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WellKnown;

      return this.apiClient.callApi(
        '/.well-known/openid-configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the introspectOAuth2Token operation.
     * @callback module:api/OAuth2Api~introspectOAuth2TokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2TokenIntrospection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Introspect OAuth2 tokens
     * The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting &#x60;accessTokenExtra&#x60; during the consent flow.  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:tokens\&quot;], \&quot;actions\&quot;: [\&quot;introspect\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} token The string value of the token. For access tokens, this is the \&quot;access_token\&quot; value returned from the token endpoint defined in OAuth 2.0 [RFC6749], Section 5.1. This endpoint DOES NOT accept refresh tokens for validation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.scope An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.
     * @param {module:api/OAuth2Api~introspectOAuth2TokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2TokenIntrospection}
     */
    this.introspectOAuth2Token = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling introspectOAuth2Token");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'token': token,
        'scope': opts['scope']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OAuth2TokenIntrospection;

      return this.apiClient.callApi(
        '/oauth2/introspect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listOAuth2Clients operation.
     * @callback module:api/OAuth2Api~listOAuth2ClientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OAuth2Client>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List OAuth 2.0 Clients
     * This endpoint never returns passwords.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;get\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:api/OAuth2Api~listOAuth2ClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OAuth2Client>}
     */
    this.listOAuth2Clients = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [OAuth2Client];

      return this.apiClient.callApi(
        '/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthAuth operation.
     * @callback module:api/OAuth2Api~oauthAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 authorize endpoint
     * This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749
     * @param {module:api/OAuth2Api~oauthAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.oauthAuth = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthToken operation.
     * @callback module:api/OAuth2Api~oauthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 token endpoint
     * This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749
     * @param {module:api/OAuth2Api~oauthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.oauthToken = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rejectOAuth2ConsentRequest operation.
     * @callback module:api/OAuth2Api~rejectOAuth2ConsentRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject a consent request
     * Call this endpoint to reject a consent request. This usually happens when a user denies access rights to an application.   The consent request id is usually transmitted via the URL query &#x60;consent&#x60;. For example: &#x60;http://consent-app.mydomain.com/?consent&#x3D;1234abcd&#x60;   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:oauth2:consent:requests:&lt;request-id&gt;\&quot;], \&quot;actions\&quot;: [\&quot;reject\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {String} id 
     * @param {module:model/ConsentRequestRejection} body 
     * @param {module:api/OAuth2Api~rejectOAuth2ConsentRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rejectOAuth2ConsentRequest = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rejectOAuth2ConsentRequest");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rejectOAuth2ConsentRequest");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/consent/requests/{id}/reject', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeOAuth2Token operation.
     * @callback module:api/OAuth2Api~revokeOAuth2TokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke OAuth2 tokens
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it.
     * @param {String} token 
     * @param {module:api/OAuth2Api~revokeOAuth2TokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.revokeOAuth2Token = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling revokeOAuth2Token");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'token': token
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOAuth2Client operation.
     * @callback module:api/OAuth2Api~updateOAuth2ClientCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an OAuth 2.0 Client
     * If you pass &#x60;client_secret&#x60; the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.   The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;update\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;  Additionally, the context key \&quot;owner\&quot; is set to the owner of the client, allowing policies such as:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:clients\&quot;], \&quot;actions\&quot;: [\&quot;update\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot;, \&quot;conditions\&quot;: { \&quot;owner\&quot;: { \&quot;type\&quot;: \&quot;EqualsSubjectCondition\&quot; } } } &#x60;&#x60;&#x60;
     * @param {String} id 
     * @param {module:model/OAuth2Client} body 
     * @param {module:api/OAuth2Api~updateOAuth2ClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2Client}
     */
    this.updateOAuth2Client = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOAuth2Client");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOAuth2Client");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OAuth2Client;

      return this.apiClient.callApi(
        '/clients/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userinfo operation.
     * @callback module:api/OAuth2Api~userinfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SwaggeruserinfoResponsePayload} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Userinfo
     * This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 access token. The endpoint implements http://openid.net/specs/openid-connect-core-1_0.html#UserInfo .
     * @param {module:api/OAuth2Api~userinfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SwaggeruserinfoResponsePayload}
     */
    this.userinfo = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SwaggeruserinfoResponsePayload;

      return this.apiClient.callApi(
        '/userinfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wellKnown operation.
     * @callback module:api/OAuth2Api~wellKnownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonWebKeySet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of well known JSON Web Keys
     * The subject making the request needs to be assigned to a policy containing:  &#x60;&#x60;&#x60; { \&quot;resources\&quot;: [\&quot;rn:hydra:keys:hydra.openid.id-token:public\&quot;], \&quot;actions\&quot;: [\&quot;GET\&quot;], \&quot;effect\&quot;: \&quot;allow\&quot; } &#x60;&#x60;&#x60;
     * @param {module:api/OAuth2Api~wellKnownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonWebKeySet}
     */
    this.wellKnown = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JsonWebKeySet;

      return this.apiClient.callApi(
        '/.well-known/jwks.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

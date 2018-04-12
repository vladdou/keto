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

;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'ApiClient',
        'model/AuthenticationDefaultSession',
        'model/AuthenticationOAuth2IntrospectionRequest',
        'model/AuthenticationOAuth2Session',
        'model/Authenticator',
        'model/Context',
        'model/Firewall',
        'model/GroupMembers',
        'model/Handler',
        'model/InlineResponse401',
        'model/IntrospectionResponse',
        'model/IsOAuth2AccessTokenAuthorized',
        'model/Manager',
        'model/OAuth2IntrospectionAuthentication',
        'model/Policy',
        'model/PolicyConditions',
        'model/Role',
        'model/Session',
        'model/SwaggerCreatePolicyParameters',
        'model/SwaggerDoesWardenAllowAccessRequestParameters',
        'model/SwaggerDoesWardenAllowTokenAccessRqeuestParameters',
        'model/SwaggerGetPolicyParameters',
        'model/SwaggerListPolicyParameters',
        'model/SwaggerListPolicyResponse',
        'model/SwaggerUpdatePolicyParameters',
        'model/SwaggerWardenBaseRequest',
        'model/TokenAllowedRequest',
        'model/WardenAccessRequest',
        'model/Writer',
        'api/PolicyApi',
        'api/RoleApi',
        'api/WardenApi'
      ],
      factory
    )
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('./ApiClient'),
      require('./model/AuthenticationDefaultSession'),
      require('./model/AuthenticationOAuth2IntrospectionRequest'),
      require('./model/AuthenticationOAuth2Session'),
      require('./model/Authenticator'),
      require('./model/Context'),
      require('./model/Firewall'),
      require('./model/GroupMembers'),
      require('./model/Handler'),
      require('./model/InlineResponse401'),
      require('./model/IntrospectionResponse'),
      require('./model/IsOAuth2AccessTokenAuthorized'),
      require('./model/Manager'),
      require('./model/OAuth2IntrospectionAuthentication'),
      require('./model/Policy'),
      require('./model/PolicyConditions'),
      require('./model/Role'),
      require('./model/Session'),
      require('./model/SwaggerCreatePolicyParameters'),
      require('./model/SwaggerDoesWardenAllowAccessRequestParameters'),
      require('./model/SwaggerDoesWardenAllowTokenAccessRqeuestParameters'),
      require('./model/SwaggerGetPolicyParameters'),
      require('./model/SwaggerListPolicyParameters'),
      require('./model/SwaggerListPolicyResponse'),
      require('./model/SwaggerUpdatePolicyParameters'),
      require('./model/SwaggerWardenBaseRequest'),
      require('./model/TokenAllowedRequest'),
      require('./model/WardenAccessRequest'),
      require('./model/Writer'),
      require('./api/PolicyApi'),
      require('./api/RoleApi'),
      require('./api/WardenApi')
    )
  }
})(function(
  ApiClient,
  AuthenticationDefaultSession,
  AuthenticationOAuth2IntrospectionRequest,
  AuthenticationOAuth2Session,
  Authenticator,
  Context,
  Firewall,
  GroupMembers,
  Handler,
  InlineResponse401,
  IntrospectionResponse,
  IsOAuth2AccessTokenAuthorized,
  Manager,
  OAuth2IntrospectionAuthentication,
  Policy,
  PolicyConditions,
  Role,
  Session,
  SwaggerCreatePolicyParameters,
  SwaggerDoesWardenAllowAccessRequestParameters,
  SwaggerDoesWardenAllowTokenAccessRqeuestParameters,
  SwaggerGetPolicyParameters,
  SwaggerListPolicyParameters,
  SwaggerListPolicyResponse,
  SwaggerUpdatePolicyParameters,
  SwaggerWardenBaseRequest,
  TokenAllowedRequest,
  WardenAccessRequest,
  Writer,
  PolicyApi,
  RoleApi,
  WardenApi
) {
  'use strict'

  /**
   * Package_main_ORY_Keto.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SwaggerJsClient = require('index'); // See note below*.
   * var xxxSvc = new SwaggerJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SwaggerJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SwaggerJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SwaggerJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version Latest
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthenticationDefaultSession model constructor.
     * @property {module:model/AuthenticationDefaultSession}
     */
    AuthenticationDefaultSession: AuthenticationDefaultSession,
    /**
     * The AuthenticationOAuth2IntrospectionRequest model constructor.
     * @property {module:model/AuthenticationOAuth2IntrospectionRequest}
     */
    AuthenticationOAuth2IntrospectionRequest: AuthenticationOAuth2IntrospectionRequest,
    /**
     * The AuthenticationOAuth2Session model constructor.
     * @property {module:model/AuthenticationOAuth2Session}
     */
    AuthenticationOAuth2Session: AuthenticationOAuth2Session,
    /**
     * The Authenticator model constructor.
     * @property {module:model/Authenticator}
     */
    Authenticator: Authenticator,
    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context: Context,
    /**
     * The Firewall model constructor.
     * @property {module:model/Firewall}
     */
    Firewall: Firewall,
    /**
     * The GroupMembers model constructor.
     * @property {module:model/GroupMembers}
     */
    GroupMembers: GroupMembers,
    /**
     * The Handler model constructor.
     * @property {module:model/Handler}
     */
    Handler: Handler,
    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401: InlineResponse401,
    /**
     * The IntrospectionResponse model constructor.
     * @property {module:model/IntrospectionResponse}
     */
    IntrospectionResponse: IntrospectionResponse,
    /**
     * The IsOAuth2AccessTokenAuthorized model constructor.
     * @property {module:model/IsOAuth2AccessTokenAuthorized}
     */
    IsOAuth2AccessTokenAuthorized: IsOAuth2AccessTokenAuthorized,
    /**
     * The Manager model constructor.
     * @property {module:model/Manager}
     */
    Manager: Manager,
    /**
     * The OAuth2IntrospectionAuthentication model constructor.
     * @property {module:model/OAuth2IntrospectionAuthentication}
     */
    OAuth2IntrospectionAuthentication: OAuth2IntrospectionAuthentication,
    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy: Policy,
    /**
     * The PolicyConditions model constructor.
     * @property {module:model/PolicyConditions}
     */
    PolicyConditions: PolicyConditions,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SwaggerCreatePolicyParameters model constructor.
     * @property {module:model/SwaggerCreatePolicyParameters}
     */
    SwaggerCreatePolicyParameters: SwaggerCreatePolicyParameters,
    /**
     * The SwaggerDoesWardenAllowAccessRequestParameters model constructor.
     * @property {module:model/SwaggerDoesWardenAllowAccessRequestParameters}
     */
    SwaggerDoesWardenAllowAccessRequestParameters: SwaggerDoesWardenAllowAccessRequestParameters,
    /**
     * The SwaggerDoesWardenAllowTokenAccessRqeuestParameters model constructor.
     * @property {module:model/SwaggerDoesWardenAllowTokenAccessRqeuestParameters}
     */
    SwaggerDoesWardenAllowTokenAccessRqeuestParameters: SwaggerDoesWardenAllowTokenAccessRqeuestParameters,
    /**
     * The SwaggerGetPolicyParameters model constructor.
     * @property {module:model/SwaggerGetPolicyParameters}
     */
    SwaggerGetPolicyParameters: SwaggerGetPolicyParameters,
    /**
     * The SwaggerListPolicyParameters model constructor.
     * @property {module:model/SwaggerListPolicyParameters}
     */
    SwaggerListPolicyParameters: SwaggerListPolicyParameters,
    /**
     * The SwaggerListPolicyResponse model constructor.
     * @property {module:model/SwaggerListPolicyResponse}
     */
    SwaggerListPolicyResponse: SwaggerListPolicyResponse,
    /**
     * The SwaggerUpdatePolicyParameters model constructor.
     * @property {module:model/SwaggerUpdatePolicyParameters}
     */
    SwaggerUpdatePolicyParameters: SwaggerUpdatePolicyParameters,
    /**
     * The SwaggerWardenBaseRequest model constructor.
     * @property {module:model/SwaggerWardenBaseRequest}
     */
    SwaggerWardenBaseRequest: SwaggerWardenBaseRequest,
    /**
     * The TokenAllowedRequest model constructor.
     * @property {module:model/TokenAllowedRequest}
     */
    TokenAllowedRequest: TokenAllowedRequest,
    /**
     * The WardenAccessRequest model constructor.
     * @property {module:model/WardenAccessRequest}
     */
    WardenAccessRequest: WardenAccessRequest,
    /**
     * The Writer model constructor.
     * @property {module:model/Writer}
     */
    Writer: Writer,
    /**
     * The PolicyApi service constructor.
     * @property {module:api/PolicyApi}
     */
    PolicyApi: PolicyApi,
    /**
     * The RoleApi service constructor.
     * @property {module:api/RoleApi}
     */
    RoleApi: RoleApi,
    /**
     * The WardenApi service constructor.
     * @property {module:api/WardenApi}
     */
    WardenApi: WardenApi
  }

  return exports
})

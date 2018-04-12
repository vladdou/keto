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

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OAuth2TokenIntrospection'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./OAuth2TokenIntrospection')
    )
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.SwaggerOAuthIntrospectionResponse = factory(
      root.SwaggerJsClient.ApiClient,
      root.SwaggerJsClient.OAuth2TokenIntrospection
    )
  }
})(this, function(ApiClient, OAuth2TokenIntrospection) {
  'use strict'

  /**
   * The SwaggerOAuthIntrospectionResponse model module.
   * @module model/SwaggerOAuthIntrospectionResponse
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerOAuthIntrospectionResponse</code>.
   * The token introspection response
   * @alias module:model/SwaggerOAuthIntrospectionResponse
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>SwaggerOAuthIntrospectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerOAuthIntrospectionResponse} obj Optional instance to populate.
   * @return {module:model/SwaggerOAuthIntrospectionResponse} The populated <code>SwaggerOAuthIntrospectionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = OAuth2TokenIntrospection.constructFromObject(data['Body'])
      }
    }
    return obj
  }

  /**
   * @member {module:model/OAuth2TokenIntrospection} Body
   */
  exports.prototype['Body'] = undefined

  return exports
})

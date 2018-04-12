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
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {}
    }
    root.SwaggerJsClient.SwaggerRevokeOAuth2TokenParameters = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The SwaggerRevokeOAuth2TokenParameters model module.
   * @module model/SwaggerRevokeOAuth2TokenParameters
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerRevokeOAuth2TokenParameters</code>.
   * @alias module:model/SwaggerRevokeOAuth2TokenParameters
   * @class
   * @param token {String} in: formData
   */
  var exports = function(token) {
    var _this = this

    _this['token'] = token
  }

  /**
   * Constructs a <code>SwaggerRevokeOAuth2TokenParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerRevokeOAuth2TokenParameters} obj Optional instance to populate.
   * @return {module:model/SwaggerRevokeOAuth2TokenParameters} The populated <code>SwaggerRevokeOAuth2TokenParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String')
      }
    }
    return obj
  }

  /**
   * in: formData
   * @member {String} token
   */
  exports.prototype['token'] = undefined

  return exports
})

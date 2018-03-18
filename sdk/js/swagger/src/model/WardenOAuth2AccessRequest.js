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
    root.SwaggerJsClient.WardenOAuth2AccessRequest = factory(
      root.SwaggerJsClient.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The WardenOAuth2AccessRequest model module.
   * @module model/WardenOAuth2AccessRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>WardenOAuth2AccessRequest</code>.
   * @alias module:model/WardenOAuth2AccessRequest
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>WardenOAuth2AccessRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WardenOAuth2AccessRequest} obj Optional instance to populate.
   * @return {module:model/WardenOAuth2AccessRequest} The populated <code>WardenOAuth2AccessRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String')
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], {
          String: Object
        })
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String')
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String'])
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String')
      }
    }
    return obj
  }

  /**
   * Action is the action that is requested on the resource.
   * @member {String} action
   */
  exports.prototype['action'] = undefined
  /**
   * Context is the request's environmental context.
   * @member {Object.<String, Object>} context
   */
  exports.prototype['context'] = undefined
  /**
   * Resource is the resource that access is requested to.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined
  /**
   * Scopes is an array of scopes that are required.
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined
  /**
   * Token is the token to introspect.
   * @member {String} token
   */
  exports.prototype['token'] = undefined

  return exports
})

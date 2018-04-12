/**
 * 
 * Package main ORY Hades
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
    root.SwaggerJsClient.Session = factory(root.SwaggerJsClient.ApiClient)
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The Session model module.
   * @module model/Session
   * @version Latest
   */

  /**
   * Constructs a new <code>Session</code>.
   * @alias module:model/Session
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Session} obj Optional instance to populate.
   * @return {module:model/Session} The populated <code>Session</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('GetSubject')) {
        obj['GetSubject'] = ApiClient.convertToType(
          data['GetSubject'],
          'String'
        )
      }
    }
    return obj
  }

  /**
   * @member {String} GetSubject
   */
  exports.prototype['GetSubject'] = undefined

  return exports
})

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
    root.SwaggerJsClient.Context = factory(root.SwaggerJsClient.ApiClient)
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The Context model module.
   * @module model/Context
   * @version Latest
   */

  /**
   * Constructs a new <code>Context</code>.
   * Context contains an access token&#39;s session data
   * @alias module:model/Context
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context} obj Optional instance to populate.
   * @return {module:model/Context} The populated <code>Context</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('accessTokenExtra')) {
        obj['accessTokenExtra'] = ApiClient.convertToType(
          data['accessTokenExtra'],
          { String: Object }
        )
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String')
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date')
      }
      if (data.hasOwnProperty('grantedScopes')) {
        obj['grantedScopes'] = ApiClient.convertToType(data['grantedScopes'], [
          'String'
        ])
      }
      if (data.hasOwnProperty('issuedAt')) {
        obj['issuedAt'] = ApiClient.convertToType(data['issuedAt'], 'Date')
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String')
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String')
      }
    }
    return obj
  }

  /**
   * Extra represents arbitrary session data.
   * @member {Object.<String, Object>} accessTokenExtra
   */
  exports.prototype['accessTokenExtra'] = undefined
  /**
   * ClientID is id of the client the token was issued for..
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined
  /**
   * ExpiresAt is the expiry timestamp.
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined
  /**
   * GrantedScopes is a list of scopes that the subject authorized when asked for consent.
   * @member {Array.<String>} grantedScopes
   */
  exports.prototype['grantedScopes'] = undefined
  /**
   * IssuedAt is the token creation time stamp.
   * @member {Date} issuedAt
   */
  exports.prototype['issuedAt'] = undefined
  /**
   * Issuer is the id of the issuer, typically an hydra instance.
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined
  /**
   * Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined

  return exports
})
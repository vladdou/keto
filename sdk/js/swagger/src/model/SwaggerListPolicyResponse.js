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
    define(['ApiClient', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.SwaggerListPolicyResponse = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.Policy);
  }
}(this, function(ApiClient, Policy) {
  'use strict';




  /**
   * The SwaggerListPolicyResponse model module.
   * @module model/SwaggerListPolicyResponse
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerListPolicyResponse</code>.
   * A policy
   * @alias module:model/SwaggerListPolicyResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SwaggerListPolicyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerListPolicyResponse} obj Optional instance to populate.
   * @return {module:model/SwaggerListPolicyResponse} The populated <code>SwaggerListPolicyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = ApiClient.convertToType(data['Body'], [Policy]);
      }
    }
    return obj;
  }

  /**
   * in: body type: array
   * @member {Array.<module:model/Policy>} Body
   */
  exports.prototype['Body'] = undefined;



  return exports;
}));



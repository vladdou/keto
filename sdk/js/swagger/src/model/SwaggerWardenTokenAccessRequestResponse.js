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
    define(['ApiClient', 'model/WardenTokenAccessRequestResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WardenTokenAccessRequestResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.SwaggerWardenTokenAccessRequestResponse = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.WardenTokenAccessRequestResponse);
  }
}(this, function(ApiClient, WardenTokenAccessRequestResponse) {
  'use strict';




  /**
   * The SwaggerWardenTokenAccessRequestResponse model module.
   * @module model/SwaggerWardenTokenAccessRequestResponse
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerWardenTokenAccessRequestResponse</code>.
   * The warden access request (with token) response
   * @alias module:model/SwaggerWardenTokenAccessRequestResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SwaggerWardenTokenAccessRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerWardenTokenAccessRequestResponse} obj Optional instance to populate.
   * @return {module:model/SwaggerWardenTokenAccessRequestResponse} The populated <code>SwaggerWardenTokenAccessRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = WardenTokenAccessRequestResponse.constructFromObject(data['Body']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WardenTokenAccessRequestResponse} Body
   */
  exports.prototype['Body'] = undefined;



  return exports;
}));



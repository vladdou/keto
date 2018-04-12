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
    define(['ApiClient', 'model/PolicyConditions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PolicyConditions'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.Policy = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PolicyConditions);
  }
}(this, function(ApiClient, PolicyConditions) {
  'use strict';




  /**
   * The Policy model module.
   * @module model/Policy
   * @version Latest
   */

  /**
   * Constructs a new <code>Policy</code>.
   * @alias module:model/Policy
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Policy} obj Optional instance to populate.
   * @return {module:model/Policy} The populated <code>Policy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], {'String': PolicyConditions});
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('effect')) {
        obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
      }
      if (data.hasOwnProperty('subjects')) {
        obj['subjects'] = ApiClient.convertToType(data['subjects'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Actions impacted by the policy.
   * @member {Array.<String>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * Conditions under which the policy is active.
   * @member {Object.<String, module:model/PolicyConditions>} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * Description of the policy.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Effect of the policy
   * @member {String} effect
   */
  exports.prototype['effect'] = undefined;
  /**
   * ID of the policy.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Resources impacted by the policy.
   * @member {Array.<String>} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * Subjects impacted by the policy.
   * @member {Array.<String>} subjects
   */
  exports.prototype['subjects'] = undefined;



  return exports;
}));



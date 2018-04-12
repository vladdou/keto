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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
}(this, function(expect, SwaggerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerJsClient.SwaggerJsonWebKeyQuery();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SwaggerJsonWebKeyQuery', function() {
    it('should create an instance of SwaggerJsonWebKeyQuery', function() {
      // uncomment below and update the code to test SwaggerJsonWebKeyQuery
      //var instane = new SwaggerJsClient.SwaggerJsonWebKeyQuery();
      //expect(instance).to.be.a(SwaggerJsClient.SwaggerJsonWebKeyQuery);
    });

    it('should have the property kid (base name: "kid")', function() {
      // uncomment below and update the code to test the property kid
      //var instane = new SwaggerJsClient.SwaggerJsonWebKeyQuery();
      //expect(instance).to.be();
    });

    it('should have the property set (base name: "set")', function() {
      // uncomment below and update the code to test the property set
      //var instane = new SwaggerJsClient.SwaggerJsonWebKeyQuery();
      //expect(instance).to.be();
    });

  });

}));

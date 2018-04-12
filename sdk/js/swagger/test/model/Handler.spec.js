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
    instance = new SwaggerJsClient.Handler();
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

  describe('Handler', function() {
    it('should create an instance of Handler', function() {
      // uncomment below and update the code to test Handler
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be.a(SwaggerJsClient.Handler);
    });

    it('should have the property generators (base name: "Generators")', function() {
      // uncomment below and update the code to test the property generators
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be();
    });

    it('should have the property H (base name: "H")', function() {
      // uncomment below and update the code to test the property H
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "Manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be();
    });

    it('should have the property resourcePrefix (base name: "ResourcePrefix")', function() {
      // uncomment below and update the code to test the property resourcePrefix
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be();
    });

    it('should have the property W (base name: "W")', function() {
      // uncomment below and update the code to test the property W
      //var instane = new SwaggerJsClient.Handler();
      //expect(instance).to.be();
    });

  });

}));

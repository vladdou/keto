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
    instance = new SwaggerJsClient.OAuth2TokenIntrospection();
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

  describe('OAuth2TokenIntrospection', function() {
    it('should create an instance of OAuth2TokenIntrospection', function() {
      // uncomment below and update the code to test OAuth2TokenIntrospection
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be.a(SwaggerJsClient.OAuth2TokenIntrospection);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property aud (base name: "aud")', function() {
      // uncomment below and update the code to test the property aud
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property ext (base name: "ext")', function() {
      // uncomment below and update the code to test the property ext
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property iat (base name: "iat")', function() {
      // uncomment below and update the code to test the property iat
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property iss (base name: "iss")', function() {
      // uncomment below and update the code to test the property iss
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property nbf (base name: "nbf")', function() {
      // uncomment below and update the code to test the property nbf
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property sub (base name: "sub")', function() {
      // uncomment below and update the code to test the property sub
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new SwaggerJsClient.OAuth2TokenIntrospection();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new SwaggerJsClient.WardenApi();
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

  describe('WardenApi', function() {
    describe('addMembersToGroup', function() {
      it('should call addMembersToGroup successfully', function(done) {
        //uncomment below and update the code to test addMembersToGroup
        //instance.addMembersToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroup', function() {
      it('should call createGroup successfully', function(done) {
        //uncomment below and update the code to test createGroup
        //instance.createGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('doesWardenAllowAccessRequest', function() {
      it('should call doesWardenAllowAccessRequest successfully', function(done) {
        //uncomment below and update the code to test doesWardenAllowAccessRequest
        //instance.doesWardenAllowAccessRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('doesWardenAllowTokenAccessRequest', function() {
      it('should call doesWardenAllowTokenAccessRequest successfully', function(done) {
        //uncomment below and update the code to test doesWardenAllowTokenAccessRequest
        //instance.doesWardenAllowTokenAccessRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listGroups', function() {
      it('should call listGroups successfully', function(done) {
        //uncomment below and update the code to test listGroups
        //instance.listGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeMembersFromGroup', function() {
      it('should call removeMembersFromGroup successfully', function(done) {
        //uncomment below and update the code to test removeMembersFromGroup
        //instance.removeMembersFromGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
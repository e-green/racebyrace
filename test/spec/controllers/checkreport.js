'use strict';

describe('Controller: CheckreportCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckreportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckreportCtrl = $controller('CheckreportCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckreportCtrl.awesomeThings.length).toBe(3);
  });
});

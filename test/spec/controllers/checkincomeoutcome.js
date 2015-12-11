'use strict';

describe('Controller: CheckincomeoutcomeCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckincomeoutcomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckincomeoutcomeCtrl = $controller('CheckincomeoutcomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckincomeoutcomeCtrl.awesomeThings.length).toBe(3);
  });
});

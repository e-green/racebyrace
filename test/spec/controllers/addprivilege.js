'use strict';

describe('Controller: AddprivilegeCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var AddprivilegeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddprivilegeCtrl = $controller('AddprivilegeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddprivilegeCtrl.awesomeThings.length).toBe(3);
  });
});

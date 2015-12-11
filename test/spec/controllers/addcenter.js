'use strict';

describe('Controller: AddcenterCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var AddcenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcenterCtrl = $controller('AddcenterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddcenterCtrl.awesomeThings.length).toBe(3);
  });
});

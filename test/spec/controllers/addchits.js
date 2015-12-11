'use strict';

describe('Controller: AddchitsCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var AddchitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddchitsCtrl = $controller('AddchitsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddchitsCtrl.awesomeThings.length).toBe(3);
  });
});

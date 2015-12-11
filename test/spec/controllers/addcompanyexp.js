'use strict';

describe('Controller: AddcompanyexpCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var AddcompanyexpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcompanyexpCtrl = $controller('AddcompanyexpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddcompanyexpCtrl.awesomeThings.length).toBe(3);
  });
});

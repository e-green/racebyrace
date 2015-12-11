'use strict';

describe('Controller: ApprovecenterindivCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var ApprovecenterindivCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApprovecenterindivCtrl = $controller('ApprovecenterindivCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApprovecenterindivCtrl.awesomeThings.length).toBe(3);
  });
});

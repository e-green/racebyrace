'use strict';

describe('Controller: CheckownworkhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckownworkhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckownworkhistoryCtrl = $controller('CheckownworkhistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckownworkhistoryCtrl.awesomeThings.length).toBe(3);
  });
});

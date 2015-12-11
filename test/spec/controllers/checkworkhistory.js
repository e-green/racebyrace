'use strict';

describe('Controller: CheckworkhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckworkhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckworkhistoryCtrl = $controller('CheckworkhistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckworkhistoryCtrl.awesomeThings.length).toBe(3);
  });
});

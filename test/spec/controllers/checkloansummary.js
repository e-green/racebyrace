'use strict';

describe('Controller: CheckloansummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckloansummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckloansummaryCtrl = $controller('CheckloansummaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckloansummaryCtrl.awesomeThings.length).toBe(3);
  });
});

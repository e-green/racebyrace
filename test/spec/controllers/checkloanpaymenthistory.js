'use strict';

describe('Controller: CheckloanpaymenthistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var CheckloanpaymenthistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckloanpaymenthistoryCtrl = $controller('CheckloanpaymenthistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CheckloanpaymenthistoryCtrl.awesomeThings.length).toBe(3);
  });
});

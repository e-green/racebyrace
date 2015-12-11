'use strict';

describe('Controller: LoanapprovalCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var LoanapprovalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanapprovalCtrl = $controller('LoanapprovalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoanapprovalCtrl.awesomeThings.length).toBe(3);
  });
});

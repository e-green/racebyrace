'use strict';

describe('Controller: LoanrequestCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var LoanrequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanrequestCtrl = $controller('LoanrequestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoanrequestCtrl.awesomeThings.length).toBe(3);
  });
});

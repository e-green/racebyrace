'use strict';

describe('Controller: DashboardyoCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var DashboardyoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardyoCtrl = $controller('DashboardyoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardyoCtrl.awesomeThings.length).toBe(3);
  });
});

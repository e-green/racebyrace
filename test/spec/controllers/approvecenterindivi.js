'use strict';

describe('Controller: ApprovecenterindiviCtrl', function () {

  // load the controller's module
  beforeEach(module('racebyraceApp'));

  var ApprovecenterindiviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApprovecenterindiviCtrl = $controller('ApprovecenterindiviCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApprovecenterindiviCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

/**
 * @ngdoc function
 * @name racebyraceApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the racebyraceApp
 */
angular.module('racebyraceApp')
  .controller('DashboardCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getAll=function(){
      alert("hi")
    };
  });

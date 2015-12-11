'use strict';

/**
 * @ngdoc overview
 * @name racebyraceApp
 * @description
 * # racebyraceApp
 *
 * Main module of the application.
 */
angular
  .module('racebyraceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'index.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashBoard'
      })
      .when('/addUser', {
        templateUrl: 'views/adduser.html',
        controller: 'AdduserCtrl',
        controllerAs: 'addUser'
      })
      .when('/addPrivilege', {
        templateUrl: 'views/addprivilege.html',
        controller: 'AddprivilegeCtrl',
        controllerAs: 'addPrivilege'
      })
      .when('/updateBlockUser', {
        templateUrl: 'views/updateblockuser.html',
        controller: 'UpdateblockuserCtrl',
        controllerAs: 'updateBlockUser'
      })
      .when('/checkWorkHistory', {
        templateUrl: 'views/checkworkhistory.html',
        controller: 'CheckworkhistoryCtrl',
        controllerAs: 'checkWorkHistory'
      })
      .when('/addCenter', {
        templateUrl: 'views/addcenter.html',
        controller: 'AddcenterCtrl',
        controllerAs: 'addCenter'
      })
      .when('/checkReport', {
        templateUrl: 'views/checkreport.html',
        controller: 'CheckreportCtrl',
        controllerAs: 'checkReport'
      })
      .when('/loanRequest', {
        templateUrl: 'views/loanrequest.html',
        controller: 'LoanrequestCtrl',
        controllerAs: 'loanRequest'
      })
      .when('/loanApproval', {
        templateUrl: 'views/loanapproval.html',
        controller: 'LoanapprovalCtrl',
        controllerAs: 'loanApproval'
      })
      .when('/checkIncomeOutCome', {
        templateUrl: 'views/checkincomeoutcome.html',
        controller: 'CheckincomeoutcomeCtrl',
        controllerAs: 'checkIncomeOutCome'
      })
      .when('/addCompanyExp', {
        templateUrl: 'views/addcompanyexp.html',
        controller: 'AddcompanyexpCtrl',
        controllerAs: 'addCompanyExp'
      })
      .when('/checkLoanSummary', {
        templateUrl: 'views/checkloansummary.html',
        controller: 'CheckloansummaryCtrl',
        controllerAs: 'checkLoanSummary'
      })
      .when('/addIndividual', {
        templateUrl: 'views/addindividual.html',
        controller: 'AddindividualCtrl',
        controllerAs: 'addIndividual'
      })
      .when('/addChits', {
        templateUrl: 'views/addchits.html',
        controller: 'AddchitsCtrl',
        controllerAs: 'addChits'
      })
      .when('/checkOwnWorkHistory', {
        templateUrl: 'views/checkownworkhistory.html',
        controller: 'CheckownworkhistoryCtrl',
        controllerAs: 'checkOwnWorkHistory'
      })
      .when('/checkLoanPaymentHistory', {
        templateUrl: 'views/checkloanpaymenthistory.html',
        controller: 'CheckloanpaymenthistoryCtrl',
        controllerAs: 'checkLoanPaymentHistory'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

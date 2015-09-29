'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fundraising-leap', {
        url: '/pto/fundraising-leap',
        templateUrl: 'app/pto/fundraising-leap/fundraising-leap.html',
        controller: 'FundraisingLeapCtrl'
      });
  });

'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pto', {
        url: '/parents/pto',
        templateUrl: 'app/parents/pto/pto.html',
        controller: 'PtoCtrl'
      });
  });
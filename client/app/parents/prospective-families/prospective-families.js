'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('prospective-families', {
        url: '/parents/prospective-families',
        templateUrl: 'app/parents/prospective-families/prospective-families.html',
        controller: 'ProspectiveFamiliesCtrl'
      });
  });
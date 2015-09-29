'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('prospective-families', {
        url: '/about/prospective-families',
        templateUrl: 'app/about/prospective-families/prospective-families.html',
        controller: 'ProspectiveFamiliesCtrl'
      });
  });

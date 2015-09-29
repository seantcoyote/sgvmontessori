'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bylaws', {
        url: '/pto/bylaws',
        templateUrl: 'app/pto/bylaws/bylaws.html',
        controller: 'BylawsCtrl'
      });
  });

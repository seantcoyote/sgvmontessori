'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fall-festival', {
        url: '/pto/fall-festival',
        templateUrl: 'app/pto/fall-festival/fall-festival.html',
        controller: 'FallFestivalCtrl'
      });
  });

'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-pto', {
        url: '/pto/about-pto',
        templateUrl: 'app/pto/about-pto/about-pto.html',
        controller: 'AboutPtoCtrl'
      });
  });

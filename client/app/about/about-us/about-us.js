'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-us', {
        url: '/about/about-us',
        templateUrl: 'app/about/about-us/about-us.html',
        controller: 'AboutUsCtrl'
      });
  });
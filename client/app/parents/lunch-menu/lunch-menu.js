'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lunch-menu', {
        url: '/parents/lunch-menu',
        templateUrl: 'app/parents/lunch-menu/lunch-menu.html',
        controller: 'LunchMenuCtrl'
      });
  });
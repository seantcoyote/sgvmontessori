'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nathan', {
        url: '/classrooms/nathan',
        templateUrl: 'app/classrooms/nathan/nathan.html',
        controller: 'NathanCtrl'
      });
  });
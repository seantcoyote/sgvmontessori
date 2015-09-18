'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buck', {
        url: '/classrooms/buck',
        templateUrl: 'app/classrooms/buck/buck.html',
        controller: 'BuckCtrl'
      });
  });

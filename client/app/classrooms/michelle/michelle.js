'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('michelle', {
        url: '/classrooms/michelle',
        templateUrl: 'app/classrooms/michelle/michelle.html',
        controller: 'MichelleCtrl'
      });
  });
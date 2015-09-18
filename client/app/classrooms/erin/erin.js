'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('erin', {
        url: '/classrooms/erin',
        templateUrl: 'app/classrooms/erin/erin.html',
        controller: 'ErinCtrl'
      });
  });

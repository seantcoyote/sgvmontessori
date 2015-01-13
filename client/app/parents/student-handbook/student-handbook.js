'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('student-handbook', {
        url: '/parents/student-handbook',
        templateUrl: 'app/parents/student-handbook/student-handbook.html',
        controller: 'StudentHandbookCtrl'
      });
  });
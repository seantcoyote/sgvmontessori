'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('montessori-student-handbook', {
        url: '/about/montessori-student-handbook',
        templateUrl: 'app/about/montessori-student-handbook/montessori-student-handbook.html',
        controller: 'MontessoriStudentHandbookCtrl'
      });
  });

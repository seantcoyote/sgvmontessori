'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('five-great-lessons', {
        url: '/about/five-great-lessons',
        templateUrl: 'app/about/five-great-lessons/five-great-lessons.html',
        controller: 'FiveGreatLessonsCtrl'
      });
  });

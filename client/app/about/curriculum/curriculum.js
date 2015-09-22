'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('curriculum', {
        url: '/about/curriculum',
        templateUrl: 'app/about/curriculum/curriculum.html',
        controller: 'CurriculumCtrl'
      });
  });

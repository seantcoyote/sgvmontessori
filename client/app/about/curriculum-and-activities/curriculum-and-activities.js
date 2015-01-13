'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('curriculum-and-activities', {
        url: '/about/curriculum-and-activities',
        templateUrl: 'app/about/curriculum-and-activities/curriculum-and-activities.html',
        controller: 'CurriculumAndActivitiesCtrl'
      });
  });
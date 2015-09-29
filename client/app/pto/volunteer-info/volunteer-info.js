'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('volunteer-info', {
        url: '/pto/volunteer-info',
        templateUrl: 'app/pto/volunteer-info/volunteer-info.html',
        controller: 'VolunteerInfoCtrl'
      });
  });

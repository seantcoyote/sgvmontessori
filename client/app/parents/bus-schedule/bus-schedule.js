'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bus-schedule', {
        url: '/parents/bus-schedule',
        templateUrl: 'app/parents/bus-schedule/bus-schedule.html',
        controller: 'BusScheduleCtrl'
      });
  });
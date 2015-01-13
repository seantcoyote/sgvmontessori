'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calendar', {
        url: '/parents/calendar',
        templateUrl: 'app/parents/calendar/calendar.html',
        controller: 'CalendarCtrl'
      });
  });
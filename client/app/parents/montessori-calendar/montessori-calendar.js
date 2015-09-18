'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('montessori-calendar', {
        url: '/parents/montessori-calendar',
        templateUrl: 'app/parents/montessori-calendar/montessori-calendar.html',
        controller: 'MontessoriCalendarCtrl'
      });
  });

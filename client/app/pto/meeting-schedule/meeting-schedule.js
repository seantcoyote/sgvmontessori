'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('meeting-schedule', {
        url: '/pto/meeting-schedule',
        templateUrl: 'app/pto/meeting-schedule/meeting-schedule.html',
        controller: 'MeetingScheduleCtrl'
      });
  });

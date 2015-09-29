'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('meeting-minutes', {
        url: '/pto/meeting-minutes',
        templateUrl: 'app/pto/meeting-minutes/meeting-minutes.html',
        controller: 'MeetingMinutesCtrl'
      });
  });

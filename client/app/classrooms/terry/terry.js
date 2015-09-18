'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('terry', {
        url: '/classrooms/terry',
        templateUrl: 'app/classrooms/terry/terry.html',
        controller: 'TerryCtrl'
      });
  });

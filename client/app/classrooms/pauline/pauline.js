'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pauline', {
        url: '/classrooms/pauline',
        templateUrl: 'app/classrooms/pauline/pauline.html',
        controller: 'PaulineCtrl'
      });
  });
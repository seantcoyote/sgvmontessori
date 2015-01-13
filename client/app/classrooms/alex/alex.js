'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('alex', {
        url: '/classrooms/alex',
        templateUrl: 'app/classrooms/alex/alex.html',
        controller: 'AlexCtrl'
      });
  });
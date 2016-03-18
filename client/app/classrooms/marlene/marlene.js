'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('marlene', {
        url: '/classrooms/marlene/',
        templateUrl: 'app/classrooms/marlene/marlene.html',
        controller: 'MarleneCtrl'
      });
  });

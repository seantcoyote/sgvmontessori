'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('escrip', {
        url: '/pto/escrip',
        templateUrl: 'app/pto/escrip/escrip.html',
        controller: 'EscripCtrl'
      });
  });

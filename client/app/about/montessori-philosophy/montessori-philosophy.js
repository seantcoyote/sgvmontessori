'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('montessori-philosophy', {
        url: '/about/montessori-philosophy',
        templateUrl: 'app/about/montessori-philosophy/montessori-philosophy.html',
        controller: 'MontessoriPhilosophyCtrl'
      });
  });

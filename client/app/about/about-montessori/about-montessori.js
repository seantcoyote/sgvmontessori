'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-montessori', {
        url: '/about/about-montessori',
        templateUrl: 'app/about/about-montessori/about-montessori.html',
        controller: 'AboutMontessoriCtrl'
      });
  });
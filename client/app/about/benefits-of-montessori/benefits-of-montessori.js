'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('benefits-of-montessori', {
        url: '/about/benefits-of-montessori',
        templateUrl: 'app/about/benefits-of-montessori/benefits-of-montessori.html',
        controller: 'BenefitsOfMontessoriCtrl'
      });
  });

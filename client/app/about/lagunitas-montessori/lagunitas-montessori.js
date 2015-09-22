'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lagunitas-montessori', {
        url: '/about/lagunitas-montessori',
        templateUrl: 'app/about/lagunitas-montessori/lagunitas-montessori.html',
        controller: 'LagunitasMontessoriCtrl'
      });
  });

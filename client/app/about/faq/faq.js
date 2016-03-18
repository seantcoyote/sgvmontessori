'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('faq', {
        url: '/about/faq',
        templateUrl: 'app/about/faq/faq.html',
        controller: 'FaqCtrl'
      });
  });

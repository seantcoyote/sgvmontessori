'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newsletter', {
        url: '/parents/newsletter',
        templateUrl: 'app/parents/newsletter/newsletter.html',
        controller: 'NewsletterCtrl'
      });
  });
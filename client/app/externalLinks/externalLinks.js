'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district-homepage', {
        url: 'http://lagunitas.org/',
        external: true
      })
      .state('academic-calendar', {
        url: 'http://lagunitas.org/important-dates/',
        external: true
      })
      .state('events-calendar', {
        url: 'http://lagunitas.org/events-calendar/',
        external: true
      })
      .state('district-news', {
        url: 'http://lagunitas.org/recent-news/',
        external: true
      })
      .state('lunch-menu', {
        url: 'http://lagunitas.org/lunch-menu/',
        external: true
      })
      .state('meal-time', {
        url: 'https://www.mymealtime.com/',
        external: true
      })
      .state('bus-schedule', {
        url: 'http://lagunitas.org/bus-schedule/',
        external: true
      })
      .state('district-student-handbook', {
        url: 'http://lagunitas.org/blog/wpfb-file/lagunitas-handbook-2014-2015-pdf/',
        external: true
      })
      .state('forms', {
        url: 'http://lagunitas.org/documents-library/',
        external: true
      });
  });

'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('montessori-forms', {
        url: '/parents/forms',
        templateUrl: 'app/parents/forms/forms.html',
        controller: 'FormsCtrl'
      });
  });
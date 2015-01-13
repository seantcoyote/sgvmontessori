'use strict';

angular.module('sgvmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers-and-staff', {
        url: '/about/teachers-and-staff',
        templateUrl: 'app/about/teachers-and-staff/teachers-and-staff.html',
        controller: 'TeachersAndStaffCtrl'
      });
  });
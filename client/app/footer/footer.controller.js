'use strict';

angular.module('sgvmApp')
  .controller('FooterCtrl', function ($scope, $location, navMenu) {
    $scope.menu = navMenu.getNavMenu();
    $scope.year = new Date().getFullYear();
  });

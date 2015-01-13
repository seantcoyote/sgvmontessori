'use strict';

angular.module('sgvmApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.menu = navMenu.getNavMenu();
  });

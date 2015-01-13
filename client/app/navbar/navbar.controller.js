'use strict';

angular.module('sgvmApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, navMenu) {

    $scope.menu = navMenu.getNavMenu();

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    // $scope.status = {
    //   isopen: false
    // };

    // $scope.toggleDropdown = function($event) {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    //   $scope.status.isopen = !$scope.status.isopen;
    // };

  });
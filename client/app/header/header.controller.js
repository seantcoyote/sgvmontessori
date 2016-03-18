'use strict';

angular.module('sgvmApp')
  .controller('HeaderCtrl', function ($scope) {

    // Scheme: Math.random() * (max-non-inclusive - min-inclusive) + min-inclusive
    // In other words, if there are 4 photos, use Math.random() * (5 - 1) + 1, with 1-based numbering in the photo names
    $scope.randomPhotoNumber = Math.floor( Math.random() * (5 - 1) + 1 );
    
  });

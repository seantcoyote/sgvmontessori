'use strict';

describe('Controller: FiveGreatLessonsCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var FiveGreatLessonsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiveGreatLessonsCtrl = $controller('FiveGreatLessonsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

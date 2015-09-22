'use strict';

describe('Controller: CurriculumCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var CurriculumCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurriculumCtrl = $controller('CurriculumCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

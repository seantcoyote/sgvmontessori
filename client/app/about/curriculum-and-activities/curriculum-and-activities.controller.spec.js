'use strict';

describe('Controller: CurriculumAndActivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var CurriculumAndActivitiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurriculumAndActivitiesCtrl = $controller('CurriculumAndActivitiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

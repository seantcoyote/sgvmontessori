'use strict';

describe('Controller: TeachersAndStaffCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var TeachersAndStaffCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeachersAndStaffCtrl = $controller('TeachersAndStaffCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

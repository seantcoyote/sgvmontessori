'use strict';

describe('Controller: BusScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var BusScheduleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusScheduleCtrl = $controller('BusScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

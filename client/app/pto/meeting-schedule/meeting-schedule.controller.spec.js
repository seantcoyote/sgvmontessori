'use strict';

describe('Controller: MeetingScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MeetingScheduleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingScheduleCtrl = $controller('MeetingScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

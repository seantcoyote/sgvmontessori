'use strict';

describe('Controller: MeetingMinutesCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MeetingMinutesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingMinutesCtrl = $controller('MeetingMinutesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

'use strict';

describe('Controller: VolunteerInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var VolunteerInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VolunteerInfoCtrl = $controller('VolunteerInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

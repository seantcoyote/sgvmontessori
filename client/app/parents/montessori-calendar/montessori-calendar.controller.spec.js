'use strict';

describe('Controller: MontessoriCalendarCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MontessoriCalendarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MontessoriCalendarCtrl = $controller('MontessoriCalendarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

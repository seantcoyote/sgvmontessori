'use strict';

describe('Controller: LunchMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var LunchMenuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LunchMenuCtrl = $controller('LunchMenuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

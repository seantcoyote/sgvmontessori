'use strict';

describe('Controller: NathanCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var NathanCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NathanCtrl = $controller('NathanCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

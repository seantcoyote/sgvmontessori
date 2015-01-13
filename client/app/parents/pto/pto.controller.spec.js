'use strict';

describe('Controller: PtoCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var PtoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PtoCtrl = $controller('PtoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

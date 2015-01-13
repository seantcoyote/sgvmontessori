'use strict';

describe('Controller: PaulineCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var PaulineCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaulineCtrl = $controller('PaulineCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

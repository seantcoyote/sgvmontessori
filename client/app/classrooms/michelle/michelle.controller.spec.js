'use strict';

describe('Controller: MichelleCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MichelleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MichelleCtrl = $controller('MichelleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

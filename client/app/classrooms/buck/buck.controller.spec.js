'use strict';

describe('Controller: BuckCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var BuckCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuckCtrl = $controller('BuckCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

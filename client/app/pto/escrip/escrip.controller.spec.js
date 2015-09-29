'use strict';

describe('Controller: EscripCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var EscripCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EscripCtrl = $controller('EscripCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

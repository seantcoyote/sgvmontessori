'use strict';

describe('Controller: ErinCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var ErinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ErinCtrl = $controller('ErinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

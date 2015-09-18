'use strict';

describe('Controller: TerryCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var TerryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TerryCtrl = $controller('TerryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

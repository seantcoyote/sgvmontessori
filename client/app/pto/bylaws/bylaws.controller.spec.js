'use strict';

describe('Controller: BylawsCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var BylawsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BylawsCtrl = $controller('BylawsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

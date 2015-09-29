'use strict';

describe('Controller: FundraisingLeapCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var FundraisingLeapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FundraisingLeapCtrl = $controller('FundraisingLeapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

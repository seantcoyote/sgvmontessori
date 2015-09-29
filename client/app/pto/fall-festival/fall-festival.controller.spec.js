'use strict';

describe('Controller: FallFestivalCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var FallFestivalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FallFestivalCtrl = $controller('FallFestivalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

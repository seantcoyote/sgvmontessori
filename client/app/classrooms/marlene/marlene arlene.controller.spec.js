'use strict';

describe('Controller: MarleneCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MarleneCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarleneCtrl = $controller('MarleneCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

'use strict';

describe('Controller: AlexCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var AlexCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlexCtrl = $controller('AlexCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

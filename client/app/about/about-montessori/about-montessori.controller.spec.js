'use strict';

describe('Controller: AboutMontessoriCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var AboutMontessoriCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutMontessoriCtrl = $controller('AboutMontessoriCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

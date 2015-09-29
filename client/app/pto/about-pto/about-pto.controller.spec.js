'use strict';

describe('Controller: AboutPtoCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var AboutPtoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutPtoCtrl = $controller('AboutPtoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

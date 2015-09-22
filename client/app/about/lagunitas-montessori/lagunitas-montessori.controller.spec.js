'use strict';

describe('Controller: LagunitasMontessoriCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var LagunitasMontessoriCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LagunitasMontessoriCtrl = $controller('LagunitasMontessoriCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

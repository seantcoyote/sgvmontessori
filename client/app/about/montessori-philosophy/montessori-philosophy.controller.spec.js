'use strict';

describe('Controller: MontessoriPhilosophyCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MontessoriPhilosophyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MontessoriPhilosophyCtrl = $controller('MontessoriPhilosophyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

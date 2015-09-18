'use strict';

describe('Controller: BenefitsOfMontessoriCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var BenefitsOfMontessoriCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenefitsOfMontessoriCtrl = $controller('BenefitsOfMontessoriCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

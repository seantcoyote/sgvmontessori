'use strict';

describe('Controller: ProspectiveFamiliesCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var ProspectiveFamiliesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProspectiveFamiliesCtrl = $controller('ProspectiveFamiliesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

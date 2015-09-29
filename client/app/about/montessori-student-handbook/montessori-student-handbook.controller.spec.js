'use strict';

describe('Controller: MontessoriStudentHandbookCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var MontessoriStudentHandbookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MontessoriStudentHandbookCtrl = $controller('MontessoriStudentHandbookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});

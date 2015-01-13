'use strict';

describe('Controller: NewsletterCtrl', function () {

  // load the controller's module
  beforeEach(module('sgvmApp'));

  var NewsletterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsletterCtrl = $controller('NewsletterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

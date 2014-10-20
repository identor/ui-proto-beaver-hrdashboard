'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('leadScoreClientApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should attach 3 nav objects to scope', function () {
    expect(scope.navs.length).toBe(3);
  });
});

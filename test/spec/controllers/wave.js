'use strict';

describe('Controller: WaveCtrl', function () {

  // load the controller's module
  beforeEach(module('leadScoreClientApp'));

  var WaveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaveCtrl = $controller('WaveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

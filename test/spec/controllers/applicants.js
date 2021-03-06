'use strict';

describe('Controller: ApplicantsCtrl', function () {

  // load the controller's module
  beforeEach(module('leadScoreClientApp'));

  var ApplicantsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicantsCtrl = $controller('ApplicantsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

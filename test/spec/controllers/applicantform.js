'use strict';

describe('Controller: ApplicantformCtrl', function () {

  // load the controller's module
  beforeEach(module('leadScoreClientApp'));

  var ApplicantformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicantformCtrl = $controller('ApplicantformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

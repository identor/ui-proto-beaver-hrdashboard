'use strict';

/**
 * @ngdoc function
 * @name leadScoreClientApp.controller:ApplicantsCtrl
 * @description
 * # ApplicantsCtrl
 * Controller of the leadScoreClientApp
 */
angular.module('leadScoreClientApp')
  .controller('ApplicantsCtrl', function ($scope, ApplicantService) {
    $scope.applicants = ApplicantService.getApplicants();
  });

'use strict';

/* global $:false */

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
    $scope.showInterviewModal = function(person) {
      $('#interview-modal').foundation('reveal', 'open');
      $scope.applicantCursor = person;
    };
    $scope.showScheduleModal = function(person) {
      $('#schedule-modal').foundation('reveal', 'open');
      $scope.applicantCursor = person;
    };
  });

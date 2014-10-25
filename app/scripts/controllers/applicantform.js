'use strict';

/**
 * @ngdoc function
 * @name leadScoreClientApp.controller:ApplicantformCtrl
 * @description
 * # ApplicantformCtrl
 * Controller of the leadScoreClientApp
 */
angular.module('leadScoreClientApp')
  .controller('ApplicantformCtrl', function ($scope) {
    $('#dp1').fdatepicker();
    $scope.employmentRecords = [];
    $scope.education = [];
  });

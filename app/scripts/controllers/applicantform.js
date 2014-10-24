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
    $('#dp2').fdatepicker();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

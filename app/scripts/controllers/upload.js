'use strict';

/**
 * @ngdoc function
 * @name leadScoreClientApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the leadScoreClientApp
 */
angular.module('leadScoreClientApp')
  .controller('UploadCtrl', function ($scope) {
    var $leadScoreFileInput = $('#leadscore-file-input');
    var $leadScoreUploadButton = $('#leadscore-upload-button');
    $scope.fileDisplaySize = '';
    $scope.file = '';
    $scope.updateLeadScoreFile = function() {
      $scope.file = $leadScoreFileInput.get(0).files[0];
      $scope.fileDisplaySize = ' (' + Math.round($scope.file.size / 1024) + ' KB) ';
      console.log('file selected');
    };

    $leadScoreFileInput.on('change', function() {
      $scope.updateLeadScoreFile();
      $scope.$apply();
    });
    $leadScoreUploadButton.on('click', function() {
      console.log('update called ' + $scope.file.name);
    });
  });

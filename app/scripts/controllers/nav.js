'use strict';

/**
 * @ngdoc function
 * @name leadScoreClientApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the leadScoreClientApp
 */
angular.module('leadScoreClientApp')
  .controller('NavCtrl', function ($scope) {
    $scope.activeName = 'Home';
    $scope.navs = [
      {
        'name': 'Home',
        'href': '#/',
      },
      {
        'name': 'Upload',
        'href': '#/upload',
      },
      {
        'name': 'About',
        'href': '#/about',
      },
    ];
    $scope.changeActive = function(name) {
      $scope.activeName = name;
    };
  });

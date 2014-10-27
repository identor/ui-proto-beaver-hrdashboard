'use strict';

/**
 * @ngdoc overview
 * @name leadScoreClientApp
 * @description
 * # leadScoreClientApp
 *
 * Main module of the application.
 */
angular
  .module('leadScoreClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
      })
      .when('/wave', {
        templateUrl: 'views/wave.html',
        controller: 'WaveCtrl'
      })
      .when('/applicantform', {
        templateUrl: 'views/applicantform.html',
        controller: 'ApplicantformCtrl'
      })
      .when('/applicants', {
        templateUrl: 'views/applicants.html',
        controller: 'ApplicantsCtrl'
      })
      .when('/personnel', {
        templateUrl: 'views/personnel.html',
        controller: 'PersonnelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ApplicantService', function() {
    function ApplicantService() {
      var applicants = [];

      this.addApplicant = function(applicant) {
        applicants.push(applicant);
      }

      this.getApplicants = function() {
        return applicants;
      }
    };
    return new ApplicantService();
  });

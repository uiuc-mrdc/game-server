'use strict';

angular.module('dreddApp', [
  'dreddApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/games');

    $locationProvider.html5Mode(true);
  });

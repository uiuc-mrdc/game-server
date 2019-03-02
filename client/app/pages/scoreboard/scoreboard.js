'use strict';

angular.module('dreddApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scoreboard', {
        url: '/scoreboard',
        templateUrl: 'app/pages/scoreboard/scoreboard.html',
        controller: 'ScoreboardCtrl',
        controllerAs: 'scoreboard'
      });
  });

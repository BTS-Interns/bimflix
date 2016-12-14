/**
 * Separate configuration file for modules
 *   https://github.com/johnpapa/angular-styleguide#style-y128
 */
(function () {
  'use strict';

  angular.module('blimFlix.core').config(config);

  /* @ngInject */
  function config($routeProvider) {
    $routeProvider
      .otherwise('/all');
  }
})();

/**
 * Separate configuration file for modules; wrap all code in closures
 *   https://github.com/johnpapa/angular-styleguide#style-y128
 */
(function () {
  'use strict';

  /**
   * Move reused dependencies into separate core app module
   *   https://github.com/johnpapa/angular-styleguide#style-y165
   */
  angular.module('blimFlix.core', [
      'ui.bootstrap',
      'ngRoute',
    'blimFlix.directives',
    'blimFlix.filters',
    'blimFlix.providers'
  ]);

  angular
    .module('blimFlix')
    .config(configure)
    .run(runBlock);

  /* @ngInject */
  function configure($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  /**
   * Run block should use factories
   *   https://github.com/johnpapa/angular-styleguide#style-y171
   */
  /* @ngInject */
  function runBlock() {
  }
})();

(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.providers')
    .factory('moviesFactory', moviesFactory);

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  /* @ngInject */
  moviesFactory.$inject = ['$resource'];

  function moviesFactory($resource) {
    /**
     * Accessible members at top
     *   https://github.com/johnpapa/angular-styleguide#style-y052
     */
     return $resource("http://localhost:3333/movies", {}, {
        query:  { method: 'GET', isArray: false }
      });
  }
})();

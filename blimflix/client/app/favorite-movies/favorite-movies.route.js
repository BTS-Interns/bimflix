/**
 * Separate configuration file for modules
 *   https://github.com/johnpapa/angular-styleguide#style-y129
 */
(function () {
  'use strict';

  angular.module('blimFlix.favoriteMovies').config(config);

  /* @ngInject */
  function config($routeProvider) {
    /**
     * Always declare controllers with their routes
     *   https://github.com/johnpapa/angular-styleguide#style-y038
     */
    $routeProvider.when('/favorite-movies', {
      templateUrl: 'app/favorite-movies/favorite-movies.html',
      controller: 'FavoriteMoviesController',
      controllerAs: 'vm',
      resolve: {}
    });
    // [INJECT:ROUTES] Generated routes appear here, at this indent level. DO NOT REMOVE.
  }

  /**
   * Declare resolves here
   *   https://github.com/johnpapa/angular-styleguide#style-y081
   *
   * Manually call out resolver dependencies by placing the following comment above it: @ngInject
   *   https://github.com/johnpapa/angular-styleguide#style-y100
   */

})();

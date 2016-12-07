(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.providers')
    .factory('favorites', favorites);
    favorites.$inject = ['$resource'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  /* @ngInject */
  function favorites($resource) {
    /**
     * Accessible members at top
     *   https://github.com/johnpapa/angular-styleguide#style-y052
     */
    return $resource('http://localhost:3333/users/:user_id/favorites/:movie_id',
      {user_id: '@user_id', movie_id: '@movie_id'},
      {
        'query' : { method: 'GET', isArray: true, },
        'save'  : { method: 'POST' },
        'remove': { method: 'DELETE' }
      });
  }
})();

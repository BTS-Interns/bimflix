(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.providers')
    .factory('users', users);
    users.$inject = ['$resource'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  /* @ngInject */
  function users($resource) {
    /**
     * Accessible members at top
     *   https://github.com/johnpapa/angular-styleguide#style-y052
     */
    return $resource('http://localhost:3333/users/:id',{id:'@id', username: '@username', email: '@email', password: '@password', avatar: '@avatar'}, {
        'query' : { method: 'GET', isArray: true },
        'save'  : { method: 'POST' }
    });

    ////////////
  }
})();

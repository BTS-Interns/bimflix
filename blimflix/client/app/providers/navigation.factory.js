(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.providers')
    .factory('navigation', navigation);
    navigation.$inject = ['$resource'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  /* @ngInject */
  function navigation($resource) {
  /**
   * Accessible members at top
   *   https://github.com/johnpapa/angular-styleguide#style-y052
   */
   return $resource('http://localhost:3333/users/:id/navigation',
    { id:'@id' },
    { 'query' :
      {
        method: 'GET'
      },
    });
  }
})();

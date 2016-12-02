(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.providers')
    .factory('seen', seen);
    seen.$inject = ['$resource'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  /* @ngInject */
  function seen($resource) {

    return $resource('http://localhost:3333/users/:id/seen/:idM',{id:'@id', idM:'@idM'}, {
      'query': { method: 'GET', isArray: true},
      'save': { method: 'POST' },
      'remove': { method:'DELETE'}
    });
  }
})();

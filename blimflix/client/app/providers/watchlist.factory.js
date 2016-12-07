(function () {
  'use strict';

  angular
    .module('blimFlix.providers')
    .factory('watchlist', watchlist);
    watchlist.$inject = ['$resource'];

  function watchlist($resource) {

    return $resource('http://localhost:3333/users/:id/watchlist/:idM', {id:'@id', idM:'@idM'}, {
      'query' : { method: 'GET', isArray: true },
      'save'  : { method: 'POST' },
      'remove': { method: 'DELETE' }
    });
  }
})();

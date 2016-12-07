(function() {
  'use strict';

  angular
    .module('blimFlix.watchlist')
    .controller('WatchlistController', WatchlistController);
    WatchlistController.$inject = ['watchlist'];

  function WatchlistController(watchlist) {

    var vm = this;

    vm.activate = activate;

    activate();

    function activate() {

    }
  }

})();

(function() {
  'use strict';

  angular
    .module('blimFlix.watchlist')
    .controller('WatchlistController', WatchlistController);
    WatchlistController.$inject = ['watchlist'];

  function WatchlistController(watchlist) {
    var vm = this;

    vm.filteredWatchlist = [];
    var watchList = watchlist.query({id: 1});
    watchList.$promise.then(function(data){
      vm.watchlistArray = data;
    });
    vm.movie = {};
    vm.showModal = false;
    vm.activate = activate;
    activate();
    function activate() {
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('blimFlix.watchlist')
    .controller('WatchlistController', WatchlistController);
    WatchlistController.$inject = ['watchlist'];

  function WatchlistController(watchlist) {
    var vm = this;
    vm.movies = [];
    vm.filteredMovies = [];

    var watchList = watchlist.query({id: 1}).$promise.then(function(data){
      vm.movies = data;
      vm.filteredMovies = data;
    });

    vm.activate = activate;

    function activate() {}

    activate();
  }
})();

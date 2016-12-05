(function() {
  'use strict';

  angular
    .module('blimFlix.watchlist')
    .controller('WatchlistController', WatchlistController);
    WatchlistController.$inject = ['watchlist'];

  function WatchlistController(watchlist) {

    var vm = this;

    // watchlist.query({id:1}).$promise.then(function (data) {
    //   vm.getWatchlist = data;
    // });

    watchlist.save({id:1, movieID:10, userID:1}).$promise.then(function (data) {
      vm.postWatchlist = data;
      //console.log(vm.postWatchlist);
    });

    // watchlist.remove({id:1, idM:10}).$promise.then(function (data) {
    //   vm.removeWatchlist = data;
    //   console.log(data);
    // });

    vm.activate = activate;

    activate();

    function activate() {

    }
  }

})();

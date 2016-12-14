(function() {
  'use strict';

  angular
    .module('blimFlix.seen')
    .controller('SeenController', SeenController);
    SeenController.$inject = ['seen'];

  function SeenController(seen) {

    var vm = this;
    vm.filteredMovies = [];
    vm.seenMovies = [];

    //Get for seen movies
    seen.query({ id: 1 }).$promise.then(function (data) {
      vm.seenMovies = data;
      vm.filteredMovies = data;
    });

    vm.showModal = false;

    vm.activate = activate;
    activate();
    function activate() {
    }
  }

})();

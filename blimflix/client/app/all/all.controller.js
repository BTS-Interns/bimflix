(function() {
  'use strict';

  angular
    .module('blimFlix.all')
    .controller('AllController', AllController);

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   *
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  AllController.$inject =  ['moviesFactory'];

  function AllController(moviesFactory) {
    /**
     * Attach any view properties to this variable
     *   https://github.com/johnpapa/angular-styleguide#style-y032
     */
    /* jshint validthis: true */

    var vm = this;
    vm.filteredMovies = [];
    vm.movies = [];

    vm.activate = activate;
    activate();

    function activate() {}

    //Get for seen movies
    moviesFactory.query().$promise.then(function (data) {
      vm.movies = data.movies;
      vm.filteredMovies = data.movies;
    });


  }
})();

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
  AllController.$inject =  ['$scope', 'moviesFactory'];

  function AllController($scope, moviesFactory) {
    /**
     * Attach any view properties to this variable
     *   https://github.com/johnpapa/angular-styleguide#style-y032
     */
    /* jshint validthis: true */

    var vm = this;

    vm.activate = activate;
    $scope.movies = moviesFactory.query();
    $scope.filteredMovies = [];
  }
})();

(function() {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.favorites')
    .controller('FavoritesController', FavoritesController);
    FavoritesController.$inject = ['favorites'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   *
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function FavoritesController(favorites) {

    /**
     * Attach any view properties to this variable
     *   https://github.com/johnpapa/angular-styleguide#style-y032
     */
    /* jshint validthis: true */
    var vm = this;
    var foo = favorites.query({user_id: 1});
    vm.filteredFav = [];

    foo.$promise.then(function (data) {
        // vm.fav = [];
        vm.fav = data;
        console.log(vm.fav);
    })
    // console.log(foo);
    console.log("HOla mundo");
    /**
     * Bindable vm.* members (in alphabetical order)
     *   All variables here should be part of the vm object and not bound to `this`
     *   https://github.com/johnpapa/angular-styleguide#style-y033
     */
    vm.activate = activate;

    activate();

    /**
     * startup logic goes here
     *   https://github.com/johnpapa/angular-styleguide#style-y080
     */
    function activate() {

    }

    /**
     * Non-1-liner view methods here; declare as regular functions
     *   Implementation details should be declared here and linked via references (note that functions are hoisted up)
     *   https://github.com/johnpapa/angular-styleguide#style-y034
     */
  }

})();

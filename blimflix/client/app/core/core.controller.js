(function() {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */
  angular
    .module('blimFlix.core')
    .controller('CoreController', CoreController);

    CoreController.$inject = ['navigation','users', '$scope'];

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   *
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function CoreController(navigation, users, $scope) {

    /**
     * Attach any view properties to this variable
     *   https://github.com/johnpapa/angular-styleguide#style-y032
     */
    /* jshint validthis: true */
    var vm = this;
    vm.activate = activate;

    navigation.query({id : 1}).$promise.then(
      function(data){
      $scope.navigation = data.navigation;
      console.log($scope.navigation);
    });
    /**
     * Bindable vm.* members (in alphabetical order)
     *   All variables here should be part of the vm object and not bound to `this`
     *   https://github.com/johnpapa/angular-styleguide#style-y033
     */

     activate();

    /**
     * startup logic goes here
     *   https://github.com/johnpapa/angular-styleguide#style-y080
     */
    function activate() {

    /**
     * Non-1-liner view methods here; declare as regular functions
     *   Implementation details should be declared here and linked via references (note that functions are hoisted up)
     *   https://github.com/johnpapa/angular-styleguide#style-y034
     */
  }
}

})();

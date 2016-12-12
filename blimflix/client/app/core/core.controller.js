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

    /* Now that you called 'navigation' to your factory, you won't
       be able to name a variable like that here: */
    navigation.query({id : 1}).$promise.then(
      function(data){

        /* Then, what entity are you refering to, from the view when you call navigation?
           The factory 'navigation' or the scope variable called 'navigation'? */
        $scope.navItems = data.navigation;
        console.log($scope.navItems);
    });

    /* @Here:
     *
     * Don't forget to comment your code!
     * ---------------------------------- */

    /* Queries the user's data and stores it in the Scope.
     * ---------------------------------------------------*/
    users.query({id : 1}).$promise.then(

      /* Proscesses the promise's fulfillment scenario.
       *
       * A callback that gets the factory's response
       * into  a variable called data.
       */
      function(data){

        // Store the 'user' object of data into scope
        $scope.user = data[0]; // In your factory you say it's an array response

        // log data for debugging
        console.log(' '); //  <-- Here some tips for console logging:
        console.log('/*------------------------------*/');
        console.log(' * Respuesta de user:', data[0]);
        console.log('/*------------------------------*/');
        console.log(' ');

        // Whatever comes next ...

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

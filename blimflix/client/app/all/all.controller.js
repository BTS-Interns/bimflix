(function() {
  'use strict';

  angular
    .module('blimFlix.all')
    .controller('AllController', AllController);

    function AllController() {
    var vm = this;
    // vm.data={
    //   name:"sara",
    //   team:"beatles"
    // }

    vm.activate = activate;
    activate();

    function activate() {

      }
    }

})();

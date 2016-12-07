(function() {
  'use strict';

  angular
    .module('blimFlix.all')
    .controller('AllController', AllController);

    function AllController() {
    var vm = this;

    vm.activate = activate;
    activate();

    function activate() {

      }
    }

})();

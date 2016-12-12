(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('sideBar', sideBar);

  function sideBar() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/side-bar/side-bar.directive.html',
      scope: {
        navigation: "="
      },
      replace:true,
      controllerAs: 'vm',
      link: [ '$scope', SideBarDirectiveController],
    };

    return directive;
  }

  function SideBarDirectiveController($scope) {

    // No need for that...
  }
})();

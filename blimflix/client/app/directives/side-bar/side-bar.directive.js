(function () {
  'use strict';

  angular
    .module('blimBlix.directives')
    .directive('sideBar', sideBar);

  function sideBar() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/side-bar/side-bar.directive.html',
      scope: {},
      controllerAs: 'vm',
      controller: ['$scope', SideBarDirectiveController]
    };
    return directive;
  }

  function SideBarDirectiveController($scope) {
  $scope.user= {
    movie:'Mean Girls'
  };
}
})();

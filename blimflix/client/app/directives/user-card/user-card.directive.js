(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('userCard', userCard);

  function userCard() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/user-card/user-card.directive.html',
      scope: {
        user: "="
      },
      controllerAs: 'vm',
      controller: ["$scope", UserCardDirectiveController]
    };

    return directive;
  }

  function UserCardDirectiveController($scope) {
    
  }
})();

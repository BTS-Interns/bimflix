(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('userCard', userCard);

  function userCard() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/user-card/user-card.directive.html',
      scope: {},
      controllerAs: 'vm',
      controller: ["$scope", UserCardDirectiveController]
    };

    return directive;
  }

  function UserCardDirectiveController($scope) {
    $scope.user = {id: 0, username: 'manuelr', email: 'manuelr@vsisoft.com', avatar: './images/user.jpg'};
  }
})();

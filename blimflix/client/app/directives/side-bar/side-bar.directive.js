(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('sideBar', sideBar);

  function sideBar() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/side-bar/side-bar.directive.html',
      scope: {},
      controllerAs: 'vm',
      controller: SideBarDirectiveController,
      replace:true
    };

    return directive;
  }

  function SideBarDirectiveController($scope) {
    $scope.sections = [
      {
		    index: 0,
		    title: "All Movies",
		    count: 30,
		    Url: "/all"
   	  },
      {
		    index: 1,
		    title: "Seen",
		    count: 13,
		    Url: "/seen"
   	  },
      {
		    index: 2,
		    title: "Favorites",
		    count: 8,
		    Url: "/favorites"
   	  },
      {
		    index: 3,
		    title: "Watchlist",
		    count: 19,
		    Url: "/watchlist"
   	  }
    ];
  }
})();

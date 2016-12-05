(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('movieFilters', movieFilters);

  function movieFilters() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/movie-filters/movie-filters.directive.html',
      scope: {movies:"="},
      controller: MovieFiltersDirectiveController,
      replace: true
    };

    return directive;
  }

  function MovieFiltersDirectiveController($scope) {
    $scope.movies=[
      {
        name:"Justin",
        genre:"comedia"
      },
      {
        name:"",
        genre:"pop"
      }
    ]
    $scope.genres = ["comedia","drama","sci-fi","romantic"];
    $scope.selectAction = function() {
      console.log($scope.genre);
    };
  }
})();

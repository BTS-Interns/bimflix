(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('movieFilters', movieFilters);

  function movieFilters() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/movie-filters/movie-filters.directive.html',
      scope: {},
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
        name:"MYBDTF",
        genre:"drama"
      },
      {
        name:"Mean Girls",
        genre:"drama"
      },
      {
        name:"Shutter Island",
        genre:"suspense"
      }
    ];

    $scope.genres = ["comedia","drama","sci-fi","romantic","suspense"];

    $scope.selectAction = function() {
      console.log($scope.genre);
      function match(value) {
        return value.genre===$scope.genre;
      }
      $scope.filtered = $scope.movies.filter(match);
      console.log($scope.filtered);
    };

  }
})();

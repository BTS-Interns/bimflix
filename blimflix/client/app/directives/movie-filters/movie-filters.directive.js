(function () {
  'use strict';

  angular
    .module('blimFlix.directives')
    .directive('movieFilters', movieFilters);

  function movieFilters() {

    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/movie-filters/movie-filters.directive.html',
      scope: {
        title: '@',
        movies: '=',
        filtered: '='
      },
      controllerAs: 'vm',
      link: MovieFiltersDirectiveController
    };

    return directive;
  }

  function MovieFiltersDirectiveController($scope) {
    $scope.$watch('movies.length',
         function(newValue, oldValue){
           generateGenres();
           generateYears();
         }
     );


    var allGenres=[], allYears=[];

    function generateGenres(){
      for(let i=0;i<$scope.movies.length;i++){
      let array=$scope.movies[i].genre.split(", ");
      if(i===0){
        for(let j=0;j<array.length;j++){
          allGenres[allGenres.length]=array[j];
        }
      }
      else{
        for(let j=0;j<array.length;j++){
          if(allGenres.includes(array[j])===false){
            allGenres[allGenres.length]=array[j];
          }
        }
      }
    }
    $scope.genres = allGenres;
  }

  function generateYears(){
   for(let i=0;i<$scope.movies.length;i++){
      if(i===0){
          allYears[allYears.length]=$scope.movies[i].year;
      }
      else{
        if(allYears.includes($scope.movies[i].year)===false){
          allYears[allYears.length]=$scope.movies[i].year;
        }
      }
    }
    $scope.years = allYears;
  }

    $scope.genre=null;
    $scope.year=null;
    $scope.filtered=$scope.movies;

    $scope.filterMovies = function() {
      function matchGenre(movie) {
      let arrayOfGenres=movie.genre.split(", ");
        for(let i=0;i<arrayOfGenres.length;i++){
          if(arrayOfGenres[i]===$scope.genre){
            return movie;
          }
        }
      }

      function matchYear(movie){
        if(movie.year===$scope.year){
          return movie;
        }
      }

      if(($scope.genre)===null && ($scope.year)===null){
        $scope.title="All movies";
        $scope.filtered=$scope.movies;
        $scope.qty=$scope.filtered.length;
      }
      else{
        if(($scope.genre)===null){
          $scope.filtered=$scope.movies.filter(matchYear);
          $scope.title="Movies from "+$scope.year;
          $scope.qty=$scope.filtered.length;
          console.log($scope.filtered);
        }
        else{
          if(($scope.year)===null){
            $scope.filtered=$scope.movies.filter(matchGenre);
            $scope.title=$scope.genre+" movies";
            $scope.qty=$scope.filtered.length;
            console.log($scope.filtered);
          }
          else{
            $scope.filtered=$scope.movies.filter(matchGenre);
            $scope.filtered=$scope.filtered.filter(matchYear);
            $scope.title=$scope.genre+" movies from "+$scope.year;
            $scope.qty=$scope.filtered.length;
            console.log($scope.filtered);

          }
        }
      }
    }

    $scope.search=function(name){
      function matchName(movie){
        let movieTitle=movie.title.toLowerCase();
        name=name.toLowerCase();
        if(movieTitle.includes(name)===true){
          return movie;
        }
      }
      $scope.title="Results with "+"'"+name+"'";
      $scope.filtered=$scope.movies.filter(matchName);
      $scope.qty=$scope.filtered.length;
    }
  }
})();

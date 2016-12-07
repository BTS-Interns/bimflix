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
      controllerAs: 'vm',
      controller: MovieFiltersDirectiveController
    };

    return directive;
  }

  function MovieFiltersDirectiveController($scope) {
    $scope.title="All movies";
    $scope.movies=[
      {
      "movieID":1,
      "title":"Almost Famous",
      "year":2000,
      "genre":"Adventure, Comedy, Drama",
      "director":"Cameron Crowe",
      "writer":"Cameron Crowe",
      "actors":"Billy Crudup, Frances McDormand, Kate Hudson, Jason Lee",
      "plot":"A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.",
      "language":"English, French","country":"USA",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00",
      "updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":2,
      "title":"The Green Mile",
      "year":1999,
      "genre":"Crime, Drama, Fantasy",
      "director":"Frank Darabont",
      "writer":"Stephen King (novel), Frank Darabont (screenplay)",
      "actors":"Tom Hanks, David Morse, Michael Clarke Duncan, Bonnie Hunt",
      "plot":"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "language":"English, French","country":"USA",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00",
      "updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":3,
      "title":"Rockstar",
      "year":2011,
      "genre":"Music, Musical",
      "director":"Imtiaz Ali",
      "writer":"Imtiaz Ali, Muazzam Beg",
      "actors":"Ranbir Kapoor, Nargis Fakhri, Shammi Kapoor, Kumud Mishra",
      "plot":"Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer.",
      "language":"Hindi",
      "country":"India",
      "poster":"http://ia.media-imdb.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":4,
      "title":"Friday Night Lights",
      "year":2006,
      "genre":"Drama, Sport",
      "director":"N/A","writer":"Peter Berg","actors":"Kyle Chandler, Connie Britton, Aimee Teegarden, Brad Leland",
      "plot":"The trials and tribulations of small town Texas football players, their friends, family, and coaching staff.",
      "language":"English",
      "country":"USA",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjIyMTYwOV5BMl5BanBnXkFtZTcwMTA2MDU1MQ@@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":5,
      "title":"The Blind Side",
      "year":2009,
      "genre":"Biography, Drama, Sport",
      "director":"John Lee Hancock",
      "writer":"John Lee Hancock, Michael Lewis (book)",
      "actors":"Sandra Bullock, Tim McGraw, Quinton Aaron, Jae Head",
      "plot":"The story of Michael Oher, a homeless and traumatized boy who became an All American football player and first round NFL draft pick with the help of a caring woman and her family.",
      "language":"English",
      "country":"USA",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":6,
      "title":"The Butterfly Effect",
      "year":2004,
      "genre":"Sci-Fi, Thriller",
      "director":"Eric Bress, J. Mackye Gruber",
      "writer":"J. Mackye Gruber, Eric Bress",
      "actors":"Ashton Kutcher, Melora Walters, Amy Smart, Elden Henson",
      "plot":"Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.",
      "language":"English",
      "country":"USA, Canada",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1ODkxNzg2N15BMl5BanBnXkFtZTYwMzQ2MTg2._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":7,
      "title":"The Fast and the Furious",
      "year":2001,
      "genre":"Action, Crime, Thriller",
      "director":"Rob Cohen","writer":"Ken Li (magazine article)",
      "actors":"Scott Thompson (screen story), Gary Scott Thompson (screenplay), Erik Bergquist (screenplay), David Ayer (screenplay)",
      "plot":"Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster",
      "language":"English",
      "country":"USA, Germany",
      "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    },
    {
      "movieID":8,
      "title":"Whiplash",
      "year":2014,
      "genre":"Drama, Music",
      "director":"Damien Chazelle",
      "writer":"Damien Chazelle",
      "actors":"Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
      "plot":"A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "language":"English",
      "country":"USA"
      ,"poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg",
      "created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00"
    }
  ];
    $scope.qty=$scope.movies.length;
    var allGenres=[], allYears=[];

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

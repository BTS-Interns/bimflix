(function () {
  'use strict';

  /**
   * Chain to fetch module
   *   https://github.com/johnpapa/angular-styleguide#style-y022
   */

  /**
   * Create one directive per file. Name the file for the directive.
   *   https://github.com/johnpapa/angular-styleguide#style-y070
   */

  angular
    .module('blimFlix.directives')
    .directive('movieItem', movieItem);

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  function movieItem() {
    /**
     * When creating a directive that makes sense as a stand-alone element, allow restrict E (custom element) and optionally restrict A (custom attribute).
     * EA is the default for Angular 1.3 +
     *   https://github.com/johnpapa/angular-styleguide#style-y074
     */

    /**
     * Use "controllerAs" syntax with a directive to be consistent with using controller as with view and controller pairings.
     *   https://github.com/johnpapa/angular-styleguide#style-y075
     */

    /**
     * Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option.
     *   https://docs.angularjs.org/guide/directive
     */
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/movie-item/movie-item.directive.html',
      scope: {},
      replace: true,
      controllerAs: 'vm',
      controller: ['$scope', MovieItemDirectiveController],
    };

    return directive;
  }

  /**
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function MovieItemDirectiveController($scope) {
    $scope.movieItem = {
      "movieID": 1,
      "title": "Almost Famous",
      "year": 2000,
      "genre": "Adventure, Comedy, Drama",
      "director": "Cameron Crowe",
      "writer": "Cameron Crowe",
      "actors": "Billy Crudup, Frances McDormand, Kate Hudson, Jason Lee",
      "plot": "A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.",
      "language": "English, French",
      "country": "USA",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
      "created_at": "0000-00-00 00:00:00",
      "updated_at": "0000-00-00 00:00:00"
    };

    $scope.imgsSources = [
      {
        selected: "/images/watchlist-unselected.png",
        unselected: "/images/watchlist-selected.png"
      },
      {
        selected: "/images/seen-unselected.png",
        unselected: "/images/seen-selected.png"
      },
      {
        selected: "/images/favorites-unselected.png",
        unselected: "/images/favorites-selected.png"
      },
      {
        selected: "/images/rating-empty-star.png",
        unselectedNext: "/images/rating-half-star.png",
        unselectedLast: "/images/rating-full-star.png"
      }
    ];

    $scope.selectCategory = function selectCategory(image){
      let temp = image.selected;
      if( Object.keys(image).length === 4 ){
        image.selected = image.unselectedNext;
        image.unselectedNext = image.unselectedLast;
        image.unselectedLast = temp;
      } else {
        image.selected = image.unselected;
        image.unselected = temp;
      }
    }
  }
})();

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
    .directive('movieDetails', movieDetails);

  /**
   * Avoid anonymous functions as callbacks
   *   https://github.com/johnpapa/angular-styleguide#style-y024
   */
  function movieDetails() {
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
      templateUrl: 'app/directives/movie-details/movie-details.directive.html',
      scope: {},
      controllerAs: 'vm',
      controller: ['$scope', '$modal', MovieDetailsDirectiveController],
      replace: true
    };

    return directive;
  }

  /**
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function MovieDetailsDirectiveController($scope, $modal) {
    // $scope.movie = {
    //     'movieID': 9,
    //     'title': 'The Matrix',
    //     'year': 1999,
    //     'genre': 'Action, Sci-Fi',
    //     'director': 'Lana Wachowski, Lilly Wachowski',
    //     'writer': 'Lilly Wachowski, Lana Wachowski',
    //     'actors': 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
    //     'plot': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    //     'language': 'English',
    //     'country': 'USA',
    //     'poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
    //     'created_at': '0000-00-00 00:00:00',
    //     'updated_at': '0000-00-00 00:00:00'
    // };
  }
})();


//
// <button data-toggle="modal" data-target="#myModal">
//   Launch demo modal
// </button>
// <movie-details></movie-details>

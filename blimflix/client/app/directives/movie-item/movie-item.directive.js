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
     * Use 'controllerAs' syntax with a directive to be consistent with using controller as with view and controller pairings.
     *   https://github.com/johnpapa/angular-styleguide#style-y075
     */

    /**
     * Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option.
     *   https://docs.angularjs.org/guide/directive
     */
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/directives/movie-item/movie-item.directive.html',
      scope: {
        movie: '='
      },
      replace: true,
      controllerAs: 'vm',
      controller: ['$scope', '$modal', MovieItemDirectiveController],
    };

    return directive;
  }

  /**
   * Document dependency injenction using annotations
   *  https://github.com/johnpapa/angular-styleguide#style-y100
   */
  /* @ngInject */
  function MovieItemDirectiveController($scope, $modal) {
    $scope.showModal = false;
    $scope.imgsSources = [
      {
        category: 'watchlist',
        selected: false,
        painted: '/images/watchlist-selected.png',
        unpainted: '/images/watchlist-unselected.png',
        current: '/images/watchlist-unselected.png'
      },
      {
        category: 'seen',
        selected: false,
        painted: '/images/seen-selected.png',
        unpainted: '/images/seen-unselected.png',
        current: '/images/seen-unselected.png'
      },
      {
        category: 'favorites',
        selected: false,
        painted: '/images/favorites-selected.png',
        unpainted: '/images/favorites-unselected.png',
        current: '/images/favorites-unselected.png'
      }
    ];

    $scope.mouseOverCategory = function mouseOverCategory (image) {
      image.current = image.painted;
    };

    $scope.mouseLeaveCategory = function mouseLeaveCategory (image) {
      if (!image.selected && image.current === image.painted) {
        image.current = image.unpainted;
      }
    };

    $scope.selectCategory = function selectCategory(image){
      if (image.selected) {
        if (image.current === image.unpainted) {
          image.selected = false;
        } else {
          image.current = image.unpainted;
          image.selected = false;
        }
      } else {
        if (image.current === image.painted) {
          image.selected = true;
        } else {
          image.current = image.painted;
          image.selected = true;
        }
      }
    };

    $scope.posterStyle = { 'background-image' : 'url(' + $scope.movie.poster + ')'};

    $scope.displayDetails = function displayDetails(){
      $modal.open({
        size: 'md',
        templateUrl: 'app/directives/movie-details/movie-details.directive.html',
        scope: $scope
      });
    };
  }
})();

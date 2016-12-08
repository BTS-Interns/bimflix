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
      scope: {
        movie: "=",
        showModal: "="
      },
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
  function MovieItemDirectiveController($scope) {console.log('Display details');

    $scope.imgsSources = [
      {
        category: "watchlist",
        selected: "/images/watchlist-unselected.png",
        unselected: "/images/watchlist-selected.png"
      },
      {
        category: "seen",
        selected: "/images/seen-unselected.png",
        unselected: "/images/seen-selected.png"
      },
      {
        category: "favorites",
        selected: "/images/favorites-unselected.png",
        unselected: "/images/favorites-selected.png"
      },
      {
        category: "rating",
        selected: "/images/rating-empty-star.png",
        unselectedNext: "/images/rating-half-star.png",
        unselectedLast: "/images/rating-full-star.png"
      }
    ];

    $scope.selectCategory = function selectCategory(image){
      let temp = image.selected;
      if( Object.keys(image).length === 5 ){
        image.selected = image.unselectedNext;
        image.unselectedNext = image.unselectedLast;
        image.unselectedLast = temp;
      } else {
        image.selected = image.unselected;
        image.unselected = temp;
      }
    }

    $scope.displayDetails = function displayDetails(){
      $scope.showModal = !$scope.showModal;
    }
  }
})();

/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('favorites routes', function () {
    describe('state', function () {
      var $route;

      beforeEach(function () {
        angular.mock.module('blimFlix');
        angular.mock.module('blimFlix.favorites');

        // Place template loading modules below here
        angular.mock.module('app/favorites/favorites.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$route_) {
        $route = _$route_;
      }));

      it('should map controller to url /favorites', function () {
        expect($route.routes['/favorites'].controller).toBe('FavoritesController');
      });
      it('should map /favorites route to favorites View template', function () {
      	var view = 'app/favorites/favorites.html';
        expect($route.routes['/favorites'].templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();

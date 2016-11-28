/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('favoriteMovies routes', function () {
    describe('state', function () {
      var $route;

      beforeEach(function () {
        angular.mock.module('blimFlix');
        angular.mock.module('blimFlix.favoriteMovies');

        // Place template loading modules below here
        angular.mock.module('app/favorite-movies/favorite-movies.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$route_) {
        $route = _$route_;
      }));

      it('should map controller to url /favorite-movies', function () {
        expect($route.routes['/favorite-movies'].controller).toBe('FavoriteMoviesController');
      });
      it('should map /favorite-movies route to favoriteMovies View template', function () {
      	var view = 'app/favorite-movies/favorite-movies.html';
        expect($route.routes['/favorite-movies'].templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();

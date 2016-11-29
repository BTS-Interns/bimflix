/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('watchlist routes', function () {
    describe('state', function () {
      var $route;

      beforeEach(function () {
        angular.mock.module('blimFlix');
        angular.mock.module('blimFlix.watchlist');

        // Place template loading modules below here
        angular.mock.module('app/watchlist/watchlist.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$route_) {
        $route = _$route_;
      }));

      it('should map controller to url /watchlist', function () {
        expect($route.routes['/watchlist'].controller).toBe('WatchlistController');
      });
      it('should map /watchlist route to watchlist View template', function () {
      	var view = 'app/watchlist/watchlist.html';
        expect($route.routes['/watchlist'].templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();

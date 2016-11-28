/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('seen routes', function () {
    describe('state', function () {
      var $route;

      beforeEach(function () {
        angular.mock.module('blimFlix');
        angular.mock.module('blimFlix.seen');

        // Place template loading modules below here
        angular.mock.module('app/seen/seen.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$route_) {
        $route = _$route_;
      }));

      it('should map controller to url /seen', function () {
        expect($route.routes['/seen'].controller).toBe('SeenController');
      });
      it('should map /seen route to seen View template', function () {
      	var view = 'app/seen/seen.html';
        expect($route.routes['/seen'].templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();

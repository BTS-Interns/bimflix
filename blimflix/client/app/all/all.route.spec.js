/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';
  describe('all routes', function () {
    describe('state', function () {
      var $route;

      beforeEach(function () {
        angular.mock.module('blimFlix');
        angular.mock.module('blimFlix.all');

        // Place template loading modules below here
        angular.mock.module('app/all/all.html');
        // [INJECT:ROUTE_TEST_TEMPLATES] templates module for test loaded here, at this indent level. DO NOT REMOVE.
      });

      beforeEach(inject(function (_$route_) {
        $route = _$route_;
      }));

      it('should map controller to url /all', function () {
        expect($route.routes['/all'].controller).toBe('AllController');
      });
      it('should map /all route to all View template', function () {
      	var view = 'app/all/all.html';
        expect($route.routes['/all'].templateUrl).toEqual(view);
      });
      // [INJECT:ROUTE_TESTS] Generated routes appear here, at this indent level. DO NOT REMOVE.
    });
  });
})();

/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('WatchlistController', function () {
    var controller, $controller;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.watchlist');
    });

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('should exist', function () {
      controller = $controller('WatchlistController', []);
      expect(controller).not.toBe(null);
    });
  });
})();

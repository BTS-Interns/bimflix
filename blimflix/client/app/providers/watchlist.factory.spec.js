/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('watchlist', function () {
    var watchlist;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_watchlist_) {
      watchlist = _watchlist_;
    }));

    it('should exist', function () {
      expect(watchlist).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(watchlist.publicMethod()).toBe(true);
      });
    });
  });
})();

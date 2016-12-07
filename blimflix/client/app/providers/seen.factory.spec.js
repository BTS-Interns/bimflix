/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('seen', function () {
    var seen;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_seen_) {
      seen = _seen_;
    }));

    it('should exist', function () {
      expect(seen).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(seen.publicMethod()).toBe(true);
      });
    });
  });
})();

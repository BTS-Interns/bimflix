/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('navigation', function () {
    var navigation;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_navigation_) {
      navigation = _navigation_;
    }));

    it('should exist', function () {
      expect(navigation).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(navigation.publicMethod()).toBe(true);
      });
    });
  });
})();

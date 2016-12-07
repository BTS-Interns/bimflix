/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('favorites', function () {
    var favorites;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_favorites_) {
      favorites = _favorites_;
    }));

    it('should exist', function () {
      expect(favorites).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(favorites.publicMethod()).toBe(true);
      });
    });
  });
})();

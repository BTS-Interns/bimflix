/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('moviesFactory', function () {
    var moviesFactory;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_moviesFactory_) {
      moviesFactory = _moviesFactory_;
    }));

    it('should exist', function () {
      expect(moviesFactory).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(moviesFactory.publicMethod()).toBe(true);
      });
    });
  });
})();

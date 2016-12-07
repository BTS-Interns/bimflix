/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('users', function () {
    var users;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.providers');
    });

    beforeEach(inject(function (_users_) {
      users = _users_;
    }));

    it('should exist', function () {
      expect(users).not.toBe(null);
    });

    describe('publicMethod', function () {
      it('should return true', function () {
        expect(users.publicMethod()).toBe(true);
      });
    });
  });
})();

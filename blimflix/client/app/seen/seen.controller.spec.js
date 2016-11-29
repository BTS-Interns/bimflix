/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('SeenController', function () {
    var controller, $controller;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.seen');
    });

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('should exist', function () {
      controller = $controller('SeenController', []);
      expect(controller).not.toBe(null);
    });
  });
})();

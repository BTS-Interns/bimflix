/** Alleviate jshint on tests https://github.com/johnpapa/angular-styleguide#style-y196 */
/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('sideBar', function () {
    var $compile, $scope;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.directives');
    });

    /**
     * Declare template caches here
     */
    beforeEach(function () {
      angular.mock.module('app/directives/side-bar/side-bar.directive.html');
    });

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
    }));

    it('should exist', function () {
      var element = $compile('<side-bar></side-bar>')($scope);
      $scope.$digest();
      expect(element.html()).toContain('View for &lt;side-bar&gt; directive');
    });
  });
})();

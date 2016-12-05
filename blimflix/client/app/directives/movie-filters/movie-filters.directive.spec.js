(function () {
  'use strict';

  describe('movieFilters', function () {
    var $compile, $scope;

    beforeEach(function () {
      angular.mock.module('blimFlix');
      angular.mock.module('blimFlix.directives');
    });

    beforeEach(function () {
      angular.mock.module('app/directives/movie-filters/movie-filters.directive.html');
    });

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
    }));

    it('should exist', function () {
      var element = $compile('<movie-filters></movie-filters>')($scope);
      $scope.$digest();
      expect(element.html()).toContain('View for &lt;movie-filters&gt; directive');
    });
  });
})();

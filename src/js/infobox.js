module.exports = function() {
  return {
    restrict: "E",
    transclude: true,
    template: `
<i class="fa fa-question-circle" ng-click="showInfo = !showInfo"></i>
<div class="dialog" ng-show="showInfo">
  <ng-transclude></ng-transclude>
</div>
    `,
    scope: {},
    link: function(scope, element, attrs) {
      
    }
  }
}
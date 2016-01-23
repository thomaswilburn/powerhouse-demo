module.exports = function() {
  return {
    restrict: "A",
    scope: {
      toggle: "=ngHover"
    },
    link: function(scope, element, attrs) {
      element.on("mouseenter", function() {
        scope.toggle = true;
        scope.$apply();
      });
      
      element.on("mouseleave", function() {
        scope.toggle = false;
        scope.$apply();
      });
    }
  }
}
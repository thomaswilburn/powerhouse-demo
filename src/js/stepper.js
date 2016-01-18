var stepper = function() {
  return {
    restrict: "E",
    template: `
  <input ng-model="model">
  <div class="step-buttons">
    <a ng-click="step(1)">+</a>
    <a ng-click="step(-1)">-</a>
  </div>
    `,
    scope: {
      model: "="
    },
    link: function(scope, element, attrs) {
      console.log(scope);
      scope.step = function(increment) {
        scope.model += increment;
      }
    }
  }
};

module.exports = stepper;
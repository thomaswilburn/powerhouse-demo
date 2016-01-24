module.exports = function() {
  
  return {
    restrict: "E",
    template: `<canvas></canvas>`,
    scope: { data: "=" },
    link: function(scope, element, attrs) {
      element = element[0];
      var canvas = element.querySelector("canvas");
      var bounds = element.getBoundingClientRect();
      canvas.width = bounds.width;
      canvas.height = bounds.height;
      var context = canvas.getContext("2d");
      scope.$watch(function() {
        var max = Math.max.apply(null, scope.data);
        var min = Math.min.apply(null, scope.data.filter(n => n));
        var range = max - min;
        if (range < 1) range = 1;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        var start = canvas.height - (scope.data[scope.data.length - 1] - min) / range * canvas.height
        context.moveTo(0, start);
        for (var i = scope.data.length - 1; i >= 0; i--) {
          if (!scope.data[i]) break;
          var x = canvas.width - i * (canvas.width / scope.data.length);
          var y = canvas.height - (scope.data[i] - min) / range * canvas.height;
          context.lineTo(x, y);
        }
        context.strokeStyle = "#333";
        context.stroke();
      });
    }
  }
  
};
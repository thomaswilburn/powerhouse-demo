var controller = function($scope, $interval) {

  //base scenarios
  $scope.scenarios = require("./scenarios");

  $scope.setScene = function(data) {
    var components = [];
    var scoring = require("./scoring");
    var total = 0;
    for (var key in data) {
      var component = {
        type: key,
        value: data[key] + Math.random() * 2
      };
      total += component.value;
      components.push(component);
    }
    components.forEach(function(c) {
      c.percentage = c.value / total * 100;
      c.score = c.value * scoring[c.type];
    });
    $scope.scene = components;
    $scope.score = components.reduce(function(t, c) { return t + c.score }, 0) / components.length / 10;

    //generate a fake history
    $scope.history = [];
    var randomize = Math.random() * 40;
    for (var i = 0; i < 200; i++) {
      var seed = i + randomize;
      $scope.history.push({
        //randomized regular waveform
        value: (Math.sin(seed / 13) + 1 + Math.abs(Math.sin(seed / 23) * .5) + Math.sin(seed / 7) + Math.random() * .2) * 10 + $scope.score
      });
    }
  };

  $scope.setScene($scope.scenarios[0].data);

  //stats
  $scope.threshold = 90;
  $scope.powered = false;

  //update on threshold change
  $scope.$watch(function() {
    $scope.powered = $scope.score < $scope.threshold;
  });
  
  $scope.sparkline = [];
  var length = 80;
  for (var i = 0; i < length; i++) $scope.sparkline.push(0);
  $interval(function() {
    $scope.score += (Math.random() - .5) * .2;
    $scope.sparkline.push($scope.score);
    $scope.sparkline = $scope.sparkline.slice(-length);
  }, 300);

}

controller.$inject = ["$scope", "$interval"];

module.exports = controller;
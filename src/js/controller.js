var controller = function($scope) {

  //base scenarios
  $scope.scenarios = [
    { 
      label: "Good",
      data: {
        coal: 30,
        solar: 40,
        hydro: 24,
        nuclear: 20,
        gas: 16
      }
    },
    { label: "Bad", data: null },
    { label: "Ugly", data: null }
  ];

  $scope.setScene = function(data) {
    $scope.scene = data;
  };

  $scope.scene = $scope.scenarios[0].data;

  //stats
  $scope.score = 50;
  $scope.threshold = 38;
  $scope.powered = false;

  //generate a fake history
  $scope.history = [];
  for (var i = 0; i < 200; i++) {
    $scope.history.push({
      value: Math.abs(Math.sin(i / 8) + Math.random() * .5) * 30 + 30
    });
  }
}

controller.$inject = ["$scope"];

module.exports = controller;
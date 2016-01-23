var app = require("./app");

app.controller("PowerhouseController", require("./controller"));
app.directive("stepInput", require("./stepper"));
app.directive("infoBox", require("./infobox"));
app.directive("ngHover", require("./hover"));
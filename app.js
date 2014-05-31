var five = require("johnny-five"),
    board = new five.Board({port: "COM2"});

board.on("ready", function() {
  (new five.Led(13)).strobe();
});
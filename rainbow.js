var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    },
    isAnode: true
  });

  var index = 0;
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

  this.loop(500, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    led.color(rainbow[index++]);
  });

  this.repl.inject({
    led: led
  });
});

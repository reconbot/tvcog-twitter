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

  led.color('00FF00');

  this.repl.inject({
    led: led
  });
});

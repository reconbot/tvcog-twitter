var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led({
    pin: 9,
    isAnode: true
  });

  led.blink(500);

  this.repl.inject({
    led: led
  });
});


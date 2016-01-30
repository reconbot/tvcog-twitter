var five = require('johnny-five');
var board = new five.Board();
var Twitter = require("twitter");
var twitterClient = new Twitter({
  // auth keys can be generated here https://apps.twitter.com/
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});


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


  twitterClient.stream("statuses/filter", {track: "coghacks"}, function(stream) {
    stream.on("data", function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    led.color(rainbow[index++]);
    });
  });

  this.repl.inject({
    led: led
  });
});

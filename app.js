var express = require('express');
var app = express();

require('./src/bot').start();

app.get('/', function(req, res) {
  res.send('<h2>Check @RockPaperScissorsGamerBot 👊✋✌️ on Telegram</h2>');
});

app.listen(process.env.PORT || 5000);
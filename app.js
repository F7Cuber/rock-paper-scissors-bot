var express = require('express');
var app = express();

require('./src/bot').start();

app.listen(process.env.PORT || 5000);
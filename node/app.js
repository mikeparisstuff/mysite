var express = require('express');
var app = module.exports = express();

var config = require('./config.js')(app, express);

require('./routes')(app);

app.listen(8000);
console.log('Server now listening on port 8000');

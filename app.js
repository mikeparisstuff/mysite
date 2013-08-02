var express = require('express');
var app = module.exports = express();

var config = require('./config.js')(app, express);

require('./routes')(app);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Server now listening on port ' + port);

var express = require('express');
var mongo = require('mongodb');
var app = module.exports = express();
var ngApp = angular.module("SiteADay");
var config = require('./config.js')(app, express);

require('./routes')(app);

var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/mydb';

// mongo.Db.connect(mongoUri, function(err, db) {
//     db.collection('mydocs', function(er, collection) {
//         collection.insert({''})
//     })
// })


var port = process.env.PORT || 5000;
app.listen(port);
console.log('Server now listening on port ' + port);

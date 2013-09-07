var express = require('express')
, fs = require('fs')
, passport = require('passport')

/**
* Main application entry file.
* Please note that the order of loading is important
*/

// Load config
var env = process.env.NODE_ENV || 'development'
, config = require('./config/config')[env]
, auth = require('./config/middlewares/authorization')
, mongoose = require('mongoose')

// db connection
var db = mongoose.connect(config.db)


// bootstrap models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function(file) {
    require(models_path + '/' + file)
})

require('./config/passport')(passport, config)

var app = express()

// Setup dropbox
// require('./config/dropbox')()

// express settings
require('./config/express')(app, config, passport)

// bootstrap routes
require('./config/routes')(app, passport, auth)

// Start the app by listening on <port>
var port = process.env.PORT || 3000
app.listen(port)
console.log('Express app started on port ' + port)

// expose app
exports = module.exports = app

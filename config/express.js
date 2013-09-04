/*
* Module dependencies
*/

var express = require('express')
 , mongoStore = require('connect-mongo')(express)
 , flash = require('connect-flash')
 , helpers = require('view-helpers')

 module.exports = function(app, config, passport) {

    console.log("Config Root: " + config.root)
    app.set('showStackError', true)

    // should be placed before express.static
    // Compresses responses using gzip
    app.use(express.compress({
        filter: function(req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
        },
        level: 9
    }))
    app.use(express.favicon())
    app.use(express.static(config.root + '/public'))

    // logger is below static so that static files are not logged
    app.use(express.logger())
    
    app.use(express.errorHandler());

    // set views path, template engine and default layout
    app.set('views', config.root + '/app/views')
    //app.set('view engine', 'jade')
    app.set('view engine', 'html')
    app.engine('html', require('ejs').renderFile)

    //enable json
    // allows cross domain requests
    app.enable('jsonp callback')

    app.configure(function() {
        //dynamic helpers
        app.use(helpers(config.app.name))

        //cookieParser should be above session
        app.use(express.cookieParser())

        // bodyParser should be above methodOverride
        app.use(express.bodyParser())
        app.use(express.methodOverride())

        // express/mongo session storage - needed for connect-mongo
        app.use(express.session( {
            secret: 'MJTK',
            store: new mongoStore({
                url: config.db,
                collection: 'sessions'
            })
        }))

        // connect flash for flash messages
        app.use(flash())

        // use passport session
        app.use(passport.initialize())
        app.use(passport.session())

        // routes should come last
        app.use(app.router)

        // assume 'not found' in the error msgs
        // is a 404. This is only for now, later
        // set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            // treat as 404
            if(~err.message.indexOf('not found')) return next()

            // log it
            console.error(err.stack)

            // error page
            res.status(500).render('500', {error: err.stack})
        })

        // app.use(function(req, res, next){
        //     res.status(404).render('404', { url: req.originalUrl, error: 'Not found'})
        // })

    })
 }

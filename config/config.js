var path = require('path')
, rootPath = path.normalize(__dirname + '/..')

module.exports = {
    development: {
        db: 'mongodb://localhost/portfolio-dev',
        root: rootPath,
        app: {
            name: "Michael Paris"
        }
    },
    production: {
        db: process.env.MONGOHQ_URL,
        root: rootPath,
        app: {
            name: "Michael Paris"
        }
    }
}

/*
module.exports = function(app, express) {

    var config = this;

    app.configure(function() {
        app.set('views', __dirname + '/views');
        console.log(app.set('views'));
        app.set('view engine', 'html');
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.engine('html', require('ejs').renderFile);
        app.use(express.static(__dirname + '/public'));
    });

    app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));

    });

    app.configure('production', function() {
        app.use(express.errorHandler());
    });

    return config;
};
*/

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/clock', function(req, res) {
        res.render('colorclock');
    });

    app.get('/analog', function(req, res) {
        res.render('analogclock');
    });

    app.get('/dragndrop', function(req, res) {
        res.render('dragndrop');
    });
};


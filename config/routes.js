module.exports = function(app, passport, auth) {

    var articles = require('../app/controllers/articles')
    app.get('/', articles.all)
    app.get('/articles', articles.all)
    app.get('/articles/:articleId', articles.show)
    app.put('/articles/:articleId', articles.update)
    app.del('/articles/:articleId', articles.destroy)
    app.post('/articles', auth.requiresLogin, articles.create)

    app.param('articleId', articles.article)

    var users = require('../app/controllers/users')
    app.get('/me', users.me)
    app.get('/login', users.login)
    app.post('/login', 
        passport.authenticate('local', { 
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true}),
        users.session
    );
    // Only I should have an account
    // app.post('/signup', users.create);
    app.get('/signout', users.signout);
    app.post('/signout', users.signout);


    var projects = require('../app/controllers/projects')
    app.get('/clock', projects.colorClock)
    app.get('/analog', projects.analogClock)
    app.get('/dragndrop', projects.dragNDrop)

};


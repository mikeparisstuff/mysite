/**
*   Module dependencies
*/

var mongoose = require('mongoose')
, User = mongoose.model('User')

/**
*   Auth callback
*/

exports.authCallback = function(req, res, next) {
    res.redirect('/')
};

/**
*   Show login form
*/
exports.login = function(req, res) {
    res.render('users/login', {
        title: 'Login',
        message: req.flash('error')
    })
};

/**
*   Show sign up form
*/
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
        user: new User()
    })
};

/**
*   Logout
*/
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/')
};

/**
*   Session
*/

exports.session = function(req, res) {
    res.redirect('/');
};

/**
*   Show my profile
*/

exports.me = function(req, res) {
    res.json(req.user || null);
}

/**
*   Create user
*/

exports.create = function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
        if(err) {
            return res.render('users/signup', {errors: err.errors, user: user})
        }
        req.logIn(user, function(err) {
            if(err) return next(err);
            return res.redirect('/')
        });
    });
};

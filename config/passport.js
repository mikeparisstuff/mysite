var mongoose = require('mongoose')
, LocalStrategy = require('passport-local').Strategy
, User = mongoose.model('User');

module.exports = function(passport, config) {
    // require('./initializer')

    // serialize sessions
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({ _id:id }, function(err, user) {
            done(err, user)
        })
    })

    // user local strategy
    passport.use(new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password'
    },
    function(email, password, done) {
        User.findOne({email: email}, function(err, user) {
            if(err) return down(err);
            if(!user) {
                // If not authenticated call done(null, false)
                return done(null, false, { message: 'Incorrect username.'})
            }
            if(!user.authenticate(password)) {
                return done(null, false, { message: 'Invalid password'})
            }
            // Supply passport with the authenticated user giving req.user
            return done(null, user)
        });
        }
    ));
}

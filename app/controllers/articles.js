var mongoose = require('mongoose')
, Article = mongoose.model('Article')
, _ = require('underscore');

/**
*  Find article by id.
*/
exports.article = function(req, res, next, id) {
    Article.load(id, function(err, article) {
        if(err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next()
    })
}

exports.show = function(req, res) {
    res.json(req.article);
}

/**
*  Create a article
*/
exports.create = function(req, res) {
    console.log("Create called");
    var article = new Article(req.body);
    article.save();
    res.status(201).json(article);
}

/**
*  Update a article
*/
exports.update = function(req, res) {
    var article = req.article;
    article = _.extend(article, req.body);
    article.save(function(err) {
        res.json(article)
    });
}

/**
*  Delete a article
*/
exports.destroy = function(req, res) {
    var article = req.article;
    article.remove(function(err){
        if(err) {
            res.render('error', {status:500});
        } else {
            res.json(article);
        }
    });
}

exports.all = function(req, res) {
    Article.find().sort('-created').exec(function(err, articles) {
        if(err) {
            res.render('error', {status: 500});
        } else {
            res.json(articles);
        }
    });
}

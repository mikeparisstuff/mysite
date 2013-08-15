/**
*  Module dependencies
*/

var mongoose = require('mongoose')
, env = process.env.NODE_ENV || 'development'
, config = require('../../config/config')[env]
, Schema = mongoose.Schema;

/**
*  Article Schema
*/

var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '', trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});

/**
*  Statics
*/
ArticleSchema.statics = {
    load: function(id, cb) {
        this.findOne({_id:id}).exec(cb);
    }
};

mongoose.model('Article', ArticleSchema);

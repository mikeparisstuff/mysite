/**
*	Dependencies
*/

var mongoose = require('mongoose')
, env = process.env.NODE_ENV || 'development'
, config = require('../../config/config')[env]
, Schema = mongoose.Schema;

/**
*	Song Schema
*/	

var SongSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',trim:true
	},
	type: {
		type: String,
		default: 'YouTube'
	},
	url: {
		type: String,
		default: '', trim:true
	},
	description: {
		type: String,
		default: '', trim:true
	}
});

/**
*	Statics
*/
SongSchema.statics = {
	load: function(id, cb) {
		this.findOne({_id:id}).exec(cb);
	}
};

mongoose.model('Song', SongSchema);
/**
*	Module Dependencies
*/

var mongoose = require('mongoose')
, env = process.env.NODE_ENV || 'development'
, config = require('../../config/config')[env]
, Schema = mongoose.Schema;

/**
*	Sketch Schema
*/

var SketchSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '', 
		trim: true
	},
	url: {
		type: String,
		default: '', 
		trim: true
	}
});

/**
*	Statics
*/
SketchSchema.statics = {
	load: function(id, cb) {
		this.findOne({_id:id}).exec(cb);
	}
};

mongoose.model('Sketch', SketchSchema);
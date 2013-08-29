var mongoose = require('mongoose')
, Song = mongoose.model('Song')
, _ = require('underscore');

/**
*	Find song by id
*/
exports.song = function(req, res, next, id) {
	Song.load(id, function(err, song) {
		if(err) return next(err);
		if(!song) return next(new Error('Failed to load song' + id));
		req.song = song;
		next();
	})
}

exports.show = function(req, res) {
	res.json(req.song);
}

/**
*	Create a song
*/
exports.create = function(req, res) {
	var song = new Song(req.body);
	song.save();
	res.status(201).json(song);
}

/**
*	Update a song
*/
exports.update = function(req, res) {
	var song = req.song;
	song = _.extend(song, req.body);
	song.save(function(err) {
		res.json(song);
	});
}

/**
*	Delete a song
*/
exports.destroy = function(req, res) {
	var song = req.song;
	song.remove(function(err){
		if(err) res.render('error', {status:500});
		else res.json(song);
	});
}

/**
*	List all songs
*/
exports.all = function(req, res) {
	Song.find().sort('-created').exec(function(err, songs) {
		if(err) res.render('error', {status:500});
		else res.json(songs);
	});
}
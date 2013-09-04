var mongoose = require('mongoose')
, Sketch = mongoose.model('Sketch')
, _ = require('underscore')

/**
*	Find Sketch by id
*/
exports.sketch = function(req, res, next, id) {
	Sketch.load(id, function(err, sketch) {
		if(err) return next(err);
		if(!sketch) return next(new Error('Failed to load sketch ' + id));
		req.sketch = sketch;
		next();
	})
}

exports.show = function(req, res) {
	res.json(req.sketch)
}

/**
*	Create a sketch
*/
exports.create = function(req, res) {
	console.log('Create called')
	var sketch = new Sketch(req.body);
	sketch.save();
	res.status(201).json(sketch);
}

/**
*	Update a sketch
*/
exports.update = function(req, res) {
	var sketch = req.sketch;
	sketch = _.extend(sketch, req.body);
	sketch.save(function(err) {
		res.json(sketch);
	});
}

/**
*	Delete a sketch
*/
exports.destroy = function(req, res) {
	var sketch = req.sketch;
	sketch.remove(function(err) {
		if(err) {
			res.render('error', {status:500})
		} else {
			res.json(sketch);
		}
	});
}

exports.all = function(req, res) {
	Sketch.find().sort('-created').exec(function(err, sketches) {
		if(err) {
			res.render('error', {status: 500});
		} else {
			res.json(sketches);
		}
	});
}
//File: controllers/article.js
var mongoose = require('mongoose');
var article  = mongoose.model('article');

//GET - Return a article with specified ID
exports.findById = function(req, res) {
	article.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /article/' + req.params.id);
		res.status(200).jsonp(article);
	});
};

//GET - Return all articles in the DB
exports.findAllarticles = function(req, res) {
	article.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /article')
		res.status(200).jsonp(article);
	});
};

//POST - Insert a new TVShow in the DB
exports.addarticle = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var article = new article({
        title:          req.body.title,
        paragraphs:     req.body.paragraphs
	});

	article.save(function(err, tvshow) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(article);
	});
};
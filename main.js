var express  = require("express"),
    app      = express(),
    http     = require("http"),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers

var models     = require('./models/article');
var articleCtrl = require('./controllers/articleController');

// Example Route

var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

//API Routers

var articles = express.Router();

articles.route('/articles/:id')
  .get(articleCtrl.findById);

  articles.route('/articles')
  .get(articleCtrl.findAllarticles)
  .post(articleCtrl.addarticle);

app.use('/api', articles);

mongoose.connect('mongodb://localhost/ustcg', { useNewUrlParser: true ,useUnifiedTopology: true}, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});


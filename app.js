/** 
 * Portfolio Server
 * v1.0.0
 * 6/3/17
 */
var express  = require('express'),
	bodyParser = require('body-parser'),
	chalk      = require('chalk'),
	app 	     = express(), 
	server 	   = require('http').createServer(app); 

require('es6-promise').polyfill();
require('isomorphic-fetch');
var port = 3000;

// Configure app to use bodyParser to parse json data
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

// API Config
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


// Start the server
server.listen(port, function() {
    console.log(chalk.green('listening on port 3000'));
});
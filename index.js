var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//local files
var newsRouter = require('./server/routers/getnews.js');
var userPrefsRouter = require('./server/routers/getUserPrefs.js')
var config = require('./server/config.js');

var server = express();

//connections
server.set('port', (process.env.PORT || 5000) );
var env = process.env.NODE_ENV;
var mongoURI = env === 'TEST' ? config.MONGODB_LOCAL_URI : config.MONGODB_STAGING_URI;
console.log('MongoURI: ', mongoURI);
mongoose.connect(mongoURI);
server.listen(server.get('port'), function () {
  console.log('listening');
});

//middleware
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/client'));
//routes middleware point to ./server/routers/...
server.use('/api/getnews', newsRouter);
server.use('/api/user', userPrefsRouter);

module.exports = server;

var express = require('express');
var mongoose = require('mongoose');
var config = require('./server/config.js');
var server = express();
//local files
var newsRouter = require('./server/routers/getnews.js');
var userPrefsRouter = require('./server/routers/getUserPrefs.js')

server.use(express.static(__dirname + '/client'));

server.set('port', (process.env.PORT || 5000) );

var env = process.env.NODE_ENV;
var mongoURI = env === 'TEST' ? config.MONGODB_LOCAL_URI : config.MONGODB_STAGING_URI;
console.log(mongoURI);
mongoose.connect(mongoURI);

server.listen(server.get('port'), function () {
  console.log('listening');
});

//routes middleware point to ./server/routers/...
server.use('/api/getnews', newsRouter);
server.use('/api/getUserPrefs', userPrefsRouter)

module.exports = server;

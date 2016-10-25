var express = require('express');
var newsRouter = require('./server/routers/getnews.js');
var userPrefsRouter = require('./server/routers/getUserPrefs.js')
var mongoose = require('mongoose');
var server = express();

server.use(express.static(__dirname + '/client'));

server.set('port', (process.env.PORT || 5000) );

mongoose.connect('mongodb://localhost/maoistMacaroons');

server.listen(server.get('port'), function () {
  console.log('listening');
});

server.use('/api/getnews', newsRouter);

server.use('/api/getUserPrefs', userPrefsRouter)

module.exports = server;

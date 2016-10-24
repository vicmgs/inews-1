var express = require('express');
var newsRouter = require('./server/routers/getNews.js');

var server = express();

server.use(express.static(__dirname + '/client'));

server.set('port', (process.env.PORT || 5000) );

server.listen(server.get('port'), function () {
  console.log('listening');
})

server.use('/api/getNews', newsRouter);

  
module.exports = server;
//


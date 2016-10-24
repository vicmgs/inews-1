var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var Promise = require('bluebird');

var request = Promise.promisify(require('request'));

var API_KEY = require('../config.js').API_KEY;
//no controller because no db

var router = express.Router();

//old response handler that didn't quite work
/*var resHandler = function(error, response, body) {
  if (error) {
    console.error(error);
  }
  if (!error && response.statusCode === 200) {
    //how do we serve bing reponse to user client?
    var info = JSON.parse(body);
    console.log(info.value);
    news = info.value;
    //response.send(info.value);
  }
};*/
//
router.route('/')
//we fire Get request to bing every time
.get(function(req, res) {
  var bingquery = 'https://api.cognitive.microsoft.com/bing/v5.0/news/?location=SanFrancisco';

  //request options obj
  var options = {
    method: 'GET',
    url: bingquery,
    headers: {
          // Request headers
          'Ocp-Apim-Subscription-Key': API_KEY
      }
  };

  request(options)
  .then(function(content){
    var info = JSON.parse(content.body);
    res.send(info.value);
  });

});

module.exports = router;
  
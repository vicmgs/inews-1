var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var Promise = require('bluebird');

var request = Promise.promisify(require('request'));
//local files
var API_KEY = require('../config.js').API_KEY;

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

router.route('/')
//we fire a Get request to bing in response to a request for news to our site
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
  //get request to bing with our bing API key
  request(options)
  .then(function(content){
    var info = JSON.parse(content.body);
    //send news back to user client
    res.send(info.value);//the news array is in this value property
  });

});
// export
module.exports = router;

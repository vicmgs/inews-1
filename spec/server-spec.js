var expect = require('chai').expect
var request = require('request');
// var server = require('../index.js');

// console.log('server', server);
// var bingEndpoint = server.endpoint;
var API_KEY = require('../server/config.js').API_KEY;

// endpoints to build out:

// GET - /API/getNews;

// POST - /API/signIn

// POST - /API/signUp

// External

// /API/getLocation


describe('server-side getNews GET request spec', function () {
  // canary test
  it('should pass this canary test', function() {
    expect(true).to.be.true;
  });
      //send api key
      //receive a 200 OK code in response
      xit('sends the api key in get request and gets response with code 200', function(done) {
        request(server)
        .get(bingEndpoint)
        .send({'Host': 'api.cognitive.microsoft.com',
          'Ocp-Apim-Subscription-Key': API_KEY})
        .expect(200)
        .end(done);
      });


     xit('GET request should have body', function () {

     });

     xit('GET request should be named "getNews"', function () {

     });

     xit('GET request should reply with JSON object', function () {

     });

     //

});

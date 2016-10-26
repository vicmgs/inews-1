var expect = require('chai').expect
var request = require('request');
var server = require('../index.js');
var bingEndpoint = 'api.cognitive.microsoft.com/bing/v5.0/news/?location=SanFrancisco';
var API_KEY = require('../server/config.js').API_KEY;
var request = require('supertest');
var superagent = require('superagent')

// endpoints to build out:

// GET - /API/getNews;

// POST - /API/signIn

// POST - /API/signUp

// External

// /API/getLocation


describe('server-side getNews GET request spec', function () {
  beforeEach(function () { server ;});
  
  // canary test
  it('should pass this canary test', function() {
    expect(true).to.be.true;
  });
      //send api key
      //receive a 200 OK code in response
      it('sends the api key in get request and gets response with code 200', function(done) {
        request(server)
        .get('/api/getnews')
        .expect(200)
        .end(done);
      });

      it('GET request should respond 404 for unsupported endpoints', function (done) {
        request(server)
        .get('/randomRequest')
        .expect(404, done)
      });

      it('GET request should respond 200 for /getNews', function (done) {
        request(server)
        .get('/api/getnews')
        .expect(200, done)
      });

      it('GET request should respond 200 for /getUserPrefs', function (done) {
        request(server)
        .get('/api/getUserPrefs/:username')
        .expect(200, done)
      });

      it('GET request should respond with a res.body that is an object', function(done){
        superagent.get(bingEndpoint)
        .send({'Host': 'https://api.cognitive.microsoft.com',
          'Ocp-Apim-Subscription-Key': API_KEY})
        .end(function(e, res){
          expect(typeof res.body).to.eql('object')
          expect(res.body).to.exist        
          done()
        })
      })

      it('GET request should respond with a res.body that is a collection of stories properties: name, image, url ', function(done){
        superagent.get('http://localhost:5000/api/getnews')
        .end(function(e, res){
          console.log(res.body[0])
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body[0].name).to.exist
        expect(res.body[0].url).to.exist  
        expect(res.body[0].image).to.exist          
        expect(res.body.length).to.be.above(10)        
        done()
      })
      })


     //

   });

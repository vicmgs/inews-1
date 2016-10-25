var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var Promise = require('bluebird');
var userPrefController = require('../../db/controllers/userPrefController.js')
var request = Promise.promisify(require('request'));
var mongoose = require('mongoose')
var API_KEY = require('../config.js').API_KEY;

var router = express.Router();


router.route('/:username')
//we fire Get request to bing every time
.get(function(req, res) {
  
  var username = req.params.username;
    console.log('~~~~~~~~~~~~~~~~get request made for user', username)
  
  userPrefController.findOne(username, function(err, data) {
    if(err) {
      console.error(err)
    }
    console.log('data  ', data)
    res.send(data)
  })
});

module.exports = router;

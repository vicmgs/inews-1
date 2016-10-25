var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
//local files
var API_KEY = require('../config.js').API_KEY;
var userPrefController = require('../../db/controllers/userPrefController.js');

var router = express.Router();

router.route('/:username')
.get(function(req, res) {
  //username from request parameters
  var username = req.params.username;
  console.log('~~~~~~~~~~~~~~~~get request made for user', username);
  //searh db for username prefs by username
  userPrefController.findOne(username, function(err, data) {
    if(err) {
      console.error(err);
    }
    //
    console.log('data  ', data);
    //send prefs data back
    res.send(data);
  })
});

module.exports = router;

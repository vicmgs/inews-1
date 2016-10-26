var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
//local files
var API_KEY = require('../config.js').API_KEY;
var userPrefController = require('../../db/controllers/userPrefsCtrl.js');

var router = express.Router();

router.route('/:username')
.get(function(req, res) {
  //username from request parameters
  var username = req.params.username;
  //searh db for username prefs by username
  userPrefController.findOne(username, function(err, data) {
    if(err) {
      console.error(err);
    }
    res.status(200).send(data);
  })
});

router.route('/')
.post(function(req, res) {
  userPrefController.insertOne({username: req.body.username, customnews1: 'test', customnews2: 'test2',
  password: req.body.password}, function(err, data) {
    if(err) {
      console.error(err);
    }

  })
  res.status(201).send();
});

module.exports = router;

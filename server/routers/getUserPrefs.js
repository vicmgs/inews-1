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

router.route('/:username')
.put(function(req, res) {
  //searh db for username prefs by username
  userPrefController.updateOne(req.params.username, req.body.field, req.body.value, function(err, data) {
    if(err) {
      console.error(err);
    } else {
      res.status(201).send();
    }
  })
});

router.route('/')
.post(function(req, res) {
  userPrefController.insertOne({username: req.body.username, password: req.body.password}, function(err, data) {
    if(err) {
      console.error(err);
    }

  })
  res.status(201).send();
});

module.exports = router;

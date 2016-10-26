var Promise = require('bluebird');
var jwt = require('jwt-simple');

var userPrefsModel = require('../models/userPrefsModel.js');

//promisify mongoose fns findOne and create?
//

// findOne will retrieve the user prefs associated with the given id
function findOne(username, callback) {
  userPrefsModel.find({username: username}, callback);
}

// insertOne inserts user prefs into the db
function insertOne(userPref, callback) {
  userPrefsModel.create(userPref, callback);
}

function updateOne(username, field, value, callback) {
  var obj = {};
  obj[field] = value;
  userPrefsModel.findOneAndUpdate({username: username}, obj, callback);
}
//todo
function signin() {

}
//todo
function signup() {

}
//todo
function checkAuth() {

}

exports.findOne = findOne;
exports.insertOne = insertOne;
exports.updateOne = updateOne;

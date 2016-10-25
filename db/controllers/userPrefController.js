var userPrefModel = require('../models/userPreferences.js');

// findOne will retrieve the story associated with the given id
function findOne(username, callback) {
  userPrefModel.find({username: username}, callback);
}

// insertOne inserts a story into the db
function insertOne(userPref, callback) {
  userPrefModel.create(userPref, callback);
}

exports.findOne = findOne;
exports.insertOne = insertOne;

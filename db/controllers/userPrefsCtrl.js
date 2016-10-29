var Promise = require('bluebird');
var jwt = require('jwt-simple');

var userPrefsModel = require('../models/userPrefsModel.js');

//promisify
var findOne = Promise.promisify(findOne);
var insertOne = Promise.promisify(insertOne);
var updateOne = Promise.promisify(updateOne);
var signup = Promise.promisify(signup);
var signin = Promise.promisify(signin);

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

//signin
function signin(user, callback) {
  var submittedPW = user.password;
  /*userPrefsModel.*/
  findOne(user.username)
  .then(function(user) {
    if (!user) {
      console.error('user not found!!!!!!!!!!!!')
    } else if (err) {
        callback(err, null);
    } else {
      //compare pws
      return user.comparePasswords(submittedPW)
      .then(function(match) {
        if (match) {
          var token = jwt.encode(user, 'secret');
          //callback on token
          callback(null, token);
        }
      })
      .catch(function (error) {
        callback(error, null);
      });
    }
  });

}
//signup
function signup(user, callback) {
  var submittedPW = user.password;
  findOne(user.username)
  .then(function(user) {
    if (user) {//if user in db
      //call signin?
      callback(null, 'user exists');
    } else {//if user not in db
      var newUser = {
        username: user.username,
        password: user.password
      };
      insertOne(newUser)
      .then(function(newUser) {
        var token = jwt.encode(newUser, 'secret');
        callback(null, token);
        //return {token: token};
      })
      .catch(function (error) {
        callback(error, null);
      });
    }//end else
  });//.something?
}
//todo
function checkAuth() {

}


exports.findOne = findOne;
exports.insertOne = insertOne;
exports.updateOne = updateOne;
exports.signup = signup;
exports.signin = signin;


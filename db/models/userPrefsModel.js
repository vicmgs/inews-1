var Promise = require('bluebird');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALTDEPTH = 12;

//schema instantiation
var UserPrefsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  userName: String,
  password: {
    type: String,
    required: true
  },
  salt: String,
  city: String,
  state: String,
  zip: Number
});

//comparePasswords method
UserPrefsSchema.methods.comparePasswords = function (pwSubmitted) {
  //pw from db
  var dbPassword = this.password;

  //bcrypt async compare
  return new Promise(function (resolve, reject) {
    bcrypt.compare(pwSubmitted, dbPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }//end callback
    });
  });
};

//pre hook
//serial middleware "pre" hook http://mongoosejs.com/docs/middleware.html
UserPrefsSchema.pre('save', function (next) {
  //saves context
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {//mongoose method
    return next();
  }
  // generate a salt
  bcrypt.genSalt(SALTDEPTH, function (err, salt) {
    if (err) {
      return next(err);
    }
    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

//schema to model conversion and export
var userPrefsModel = mongoose.model('userPrefs', UserPrefsSchema);
module.exports = userPrefsModel;

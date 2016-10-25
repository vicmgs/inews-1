var mongoose = require('mongoose');

var userPrefSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  userName: String,
  password: String,
  city: String,
  state: String,
  zip: Number
});

var userPrefModel = mongoose.model('userPreferences', userPrefSchema);

module.exports = userPrefModel;

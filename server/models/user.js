
const mongoose = require('mongoose')
const config = require('../config/database')
const bcrypt = require('bcryptjs');


const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
const User = module.exports = mongoose.model('User', UserSchema)


module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}



module.exports.getUserByUserName = function (userName, callback) {
  const query = {
    userName: userName
  }
  User.find(name, callback)
}


module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}



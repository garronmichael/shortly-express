var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var utils = require('../../lib/utility.js');

var User = db.Model.extend({
  tableName: 'users',
  genHash: function(password) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, null, function(err, hash) {
        this.hash = hash;
        this.salt = salt;
      });
    });
  }
});

module.exports = User;

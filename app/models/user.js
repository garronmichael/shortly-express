var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var utils = require('../../lib/utility.js');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(password) {
    this.on('creating', function(model, attrs, options) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, null, function(err, hash) {
          model.set({'hash': hash, 'salt': salt});
        });
      });
    });
  }

});

module.exports = User;

var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var utils = require('../../lib/utility.js');

var User = db.Model.extend({
  tableName: 'users'
});

module.exports = User;

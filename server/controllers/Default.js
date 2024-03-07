'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.searchUser = function searchUser (req, res, next, userId) {
  Default.searchUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

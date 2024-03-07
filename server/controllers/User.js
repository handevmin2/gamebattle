'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.deleteUserId = function deleteUserId (req, res, next, userId) {
  User.deleteUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserGameSchedule = function getUserGameSchedule (req, res, next, userId) {
  User.getUserGameSchedule(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserId = function getUserId (req, res, next, userId) {
  User.getUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserNotifications = function getUserNotifications (req, res, next, userId) {
  User.getUserNotifications(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserTeam = function getUserTeam (req, res, next, userId) {
  User.getUserTeam(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putUserId = function putUserId (req, res, next, body, userId) {
  User.putUserId(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

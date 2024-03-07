'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.connectChat = function connectChat (req, res, next) {
  Chat.connectChat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

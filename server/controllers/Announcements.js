'use strict';

var utils = require('../utils/writer.js');
var Announcements = require('../service/AnnouncementsService');

module.exports.createAnnouncement = function createAnnouncement (req, res, next, body) {
  Announcements.createAnnouncement(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnnouncement = function deleteAnnouncement (req, res, next, announcementId) {
  Announcements.deleteAnnouncement(announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnnouncements = function getAnnouncements (req, res, next) {
  Announcements.getAnnouncements()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAnnouncement = function updateAnnouncement (req, res, next, body, announcementId) {
  Announcements.updateAnnouncement(body, announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var Community = require('../service/CommunityService');

module.exports.createComment = function createComment (req, res, next, body, postId) {
  Community.createComment(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createPost = function createPost (req, res, next, body) {
  Community.createPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next, postId) {
  Community.deletePost(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listComments = function listComments (req, res, next, postId) {
  Community.listComments(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPosts = function listPosts (req, res, next) {
  Community.listPosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next, body, postId) {
  Community.updatePost(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var Leaderboard = require('../service/LeaderboardService');

module.exports.getIndividualRankings = function getIndividualRankings (req, res, next, limit) {
  Leaderboard.getIndividualRankings(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamRankings = function getTeamRankings (req, res, next, limit) {
  Leaderboard.getTeamRankings(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

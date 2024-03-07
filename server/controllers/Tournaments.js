'use strict';

var utils = require('../utils/writer.js');
var Tournaments = require('../service/TournamentsService');

module.exports.applyForTournament = function applyForTournament (req, res, next, body, tournamentId) {
  Tournaments.applyForTournament(body, tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createBracket = function createBracket (req, res, next, body, tournamentId) {
  Tournaments.createBracket(body, tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTournament = function createTournament (req, res, next, body) {
  Tournaments.createTournament(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBracket = function deleteBracket (req, res, next, tournamentId) {
  Tournaments.deleteBracket(tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTournamentDetails = function deleteTournamentDetails (req, res, next, tournamentId) {
  Tournaments.deleteTournamentDetails(tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBracket = function getBracket (req, res, next, tournamentId) {
  Tournaments.getBracket(tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHotTournaments = function getHotTournaments (req, res, next) {
  Tournaments.getHotTournaments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPopularTournaments = function getPopularTournaments (req, res, next) {
  Tournaments.getPopularTournaments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTournamentDetails = function getTournamentDetails (req, res, next, tournamentId) {
  Tournaments.getTournamentDetails(tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTournamentTeams = function getTournamentTeams (req, res, next, tournamentId) {
  Tournaments.getTournamentTeams(tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTournaments = function getTournaments (req, res, next) {
  Tournaments.getTournaments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUpcomingTournaments = function getUpcomingTournaments (req, res, next) {
  Tournaments.getUpcomingTournaments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postMatchResult = function postMatchResult (req, res, next, body, tournamentId) {
  Tournaments.postMatchResult(body, tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchTournaments = function searchTournaments (req, res, next, keyword, game) {
  Tournaments.searchTournaments(keyword, game)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBrackets = function updateBrackets (req, res, next, body, tournamentId) {
  Tournaments.updateBrackets(body, tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMatchResult = function updateMatchResult (req, res, next, body, tournamentId, bracketId) {
  Tournaments.updateMatchResult(body, tournamentId, bracketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTournamentDetails = function updateTournamentDetails (req, res, next, body, tournamentId) {
  Tournaments.updateTournamentDetails(body, tournamentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

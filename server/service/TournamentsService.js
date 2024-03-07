'use strict';


/**
 * 토너먼트 참가 신청
 *
 * body Team 
 * tournamentId String 참가 신청할 토너먼트의 ID
 * no response value expected for this operation
 **/
exports.applyForTournament = function(body,tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 대진표 등록
 *
 * body Bracket 
 * tournamentId String 
 * no response value expected for this operation
 **/
exports.createBracket = function(body,tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 새 토너먼트 생성
 *
 * body TournamentDetails 
 * no response value expected for this operation
 **/
exports.createTournament = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 대진표 삭제
 *
 * tournamentId String 삭제할 대진표의 ID
 * no response value expected for this operation
 **/
exports.deleteBracket = function(tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 토너먼트 삭제
 *
 * tournamentId String 삭제할 토너먼트의 ID
 * no response value expected for this operation
 **/
exports.deleteTournamentDetails = function(tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 대진표 조회
 *
 * tournamentId String 조회할 토너먼트의 ID
 * returns List
 **/
exports.getBracket = function(tournamentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "bracketId" : "bracket1",
  "rounds" : [ {
    "round" : 1,
    "matches" : [ {
      "order" : 1,
      "score" : {
        "teamAScore" : 6,
        "teamBScore" : 1
      },
      "scheduledTime" : "2000-01-23T04:56:07.000+00:00",
      "teamA" : "teamA",
      "teamB" : "teamB"
    }, {
      "order" : 2,
      "score" : {
        "teamAScore" : 3,
        "teamBScore" : 4
      },
      "scheduledTime" : "2000-01-23T06:30:00.000+00:00",
      "teamA" : "teamC",
      "teamB" : "teamD"
    } ]
  }, {
    "round" : 2,
    "matches" : [ {
      "order" : 1,
      "score" : {
        "teamAScore" : 2,
        "teamBScore" : 3
      },
      "scheduledTime" : "2000-01-24T05:00:00.000+00:00",
      "teamA" : "teamE",
      "teamB" : "teamF"
    }, {
      "order" : 2,
      "score" : {
        "teamAScore" : 5,
        "teamBScore" : 5
      },
      "scheduledTime" : "2000-01-24T07:15:00.000+00:00",
      "teamA" : "teamG",
      "teamB" : "teamH"
    } ]
  } ]
}, {
  "bracketId" : "bracket1",
  "rounds" : [ {
    "round" : 1,
    "matches" : [ {
      "order" : 1,
      "score" : {
        "teamAScore" : 6,
        "teamBScore" : 1
      },
      "scheduledTime" : "2000-01-23T04:56:07.000+00:00",
      "teamA" : "teamA",
      "teamB" : "teamB"
    }, {
      "order" : 2,
      "score" : {
        "teamAScore" : 3,
        "teamBScore" : 4
      },
      "scheduledTime" : "2000-01-23T06:30:00.000+00:00",
      "teamA" : "teamC",
      "teamB" : "teamD"
    } ]
  }, {
    "round" : 2,
    "matches" : [ {
      "order" : 1,
      "score" : {
        "teamAScore" : 2,
        "teamBScore" : 3
      },
      "scheduledTime" : "2000-01-24T05:00:00.000+00:00",
      "teamA" : "teamE",
      "teamB" : "teamF"
    }, {
      "order" : 2,
      "score" : {
        "teamAScore" : 5,
        "teamBScore" : 5
      },
      "scheduledTime" : "2000-01-24T07:15:00.000+00:00",
      "teamA" : "teamG",
      "teamB" : "teamH"
    } ]
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 지금 핫한 대회 목록 조회
 *
 * returns List
 **/
exports.getHotTournaments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 인기 있는 대회 목록 조회
 *
 * returns List
 **/
exports.getPopularTournaments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 토너먼트 상세 정보 조회
 *
 * tournamentId String 조회할 토너먼트의 ID
 * returns TournamentDetails
 **/
exports.getTournamentDetails = function(tournamentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entryFee" : 0,
  "numberOfTeamMember" : 0,
  "schedule" : {
    "start" : "2000-01-23T04:56:07.000+00:00",
    "end" : "2000-01-23T04:56:07.000+00:00"
  },
  "game" : "game",
  "registrationPeriod" : {
    "start" : "2000-01-23T04:56:07.000+00:00",
    "end" : "2000-01-23T04:56:07.000+00:00"
  },
  "backgroundImage" : "http://example.com/aeiou",
  "rules" : "rules",
  "prize" : 0,
  "title" : "title",
  "competitionFormat" : "individual",
  "tournamentType" : "single",
  "ageRestriction" : true,
  "minimumAge" : 18,
  "enableLiveChat" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 특정 토너먼트의 참가팀 목록 조회
 *
 * tournamentId String 
 * returns List
 **/
exports.getTournamentTeams = function(tournamentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "teamName" : "teamName",
  "logoImage" : "http://example.com/aeiou",
  "teamId" : "teamId",
  "teamMembers" : [ {
    "userId" : "userId",
    "email" : "email",
    "password" : "password",
    "phoneNumber" : "phoneNumber",
    "bio" : "bio",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "updated_at" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "userId" : "userId",
    "email" : "email",
    "password" : "password",
    "phoneNumber" : "phoneNumber",
    "bio" : "bio",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "updated_at" : "2000-01-23T04:56:07.000+00:00"
  } ]
}, {
  "teamName" : "teamName",
  "logoImage" : "http://example.com/aeiou",
  "teamId" : "teamId",
  "teamMembers" : [ {
    "userId" : "userId",
    "email" : "email",
    "password" : "password",
    "phoneNumber" : "phoneNumber",
    "bio" : "bio",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "updated_at" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "userId" : "userId",
    "email" : "email",
    "password" : "password",
    "phoneNumber" : "phoneNumber",
    "bio" : "bio",
    "created_at" : "2000-01-23T04:56:07.000+00:00",
    "updated_at" : "2000-01-23T04:56:07.000+00:00"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 토너먼트 목록 조회
 *
 * returns List
 **/
exports.getTournaments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 진행 예정인 토너먼트 목록 조회
 *
 * returns List
 **/
exports.getUpcomingTournaments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 경기 결과 등록
 *
 * body Match 
 * tournamentId String 결과를 등록할 토너먼트의 ID
 * no response value expected for this operation
 **/
exports.postMatchResult = function(body,tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 토너먼트 검색
 *
 * keyword String 검색 키워드 (optional)
 * game String 게임 종목 (optional)
 * returns List
 **/
exports.searchTournaments = function(keyword,game) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "tournamentId" : "tournamentId",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "ongoing"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 대진표 수정
 *
 * body List 
 * tournamentId String 수정할 토너먼트의 ID
 * no response value expected for this operation
 **/
exports.updateBrackets = function(body,tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 경기 결과 수정
 *
 * body Bracket 
 * tournamentId String 토너먼트 ID
 * bracketId String 수정할 경기의 ID
 * no response value expected for this operation
 **/
exports.updateMatchResult = function(body,tournamentId,bracketId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 토너먼트 상세 정보 수정
 *
 * body TournamentDetails 
 * tournamentId String 수정할 토너먼트의 ID
 * no response value expected for this operation
 **/
exports.updateTournamentDetails = function(body,tournamentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


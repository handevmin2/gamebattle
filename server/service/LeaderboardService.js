'use strict';


/**
 * 개인 순위 조회
 *
 * limit Integer 반환할 순위의 개수 (기본값 10) (optional)
 * returns List
 **/
exports.getIndividualRankings = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 팀 순위 조회
 *
 * limit Integer 반환할 순위의 개수 (기본값 10) (optional)
 * returns List
 **/
exports.getTeamRankings = function(limit) {
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


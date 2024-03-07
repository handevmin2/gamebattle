'use strict';


/**
 * Delete User Account
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.deleteUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 사용자의 게임 일정 조회
 *
 * userId String 
 * returns List
 **/
exports.getUserGameSchedule = function(userId) {
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
 * 사용자 정보 조회
 *
 * userId String 
 * returns User
 **/
exports.getUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : "userId",
  "email" : "email",
  "password" : "password",
  "phoneNumber" : "phoneNumber",
  "bio" : "bio",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "updated_at" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 사용자의 알림 목록 조회
 *
 * userId String 
 * returns List
 **/
exports.getUserNotifications = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "read" : true,
  "NotificationImage" : "http://example.com/aeiou",
  "notificationId" : "notificationId",
  "title" : "title",
  "message" : "message",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "read" : true,
  "NotificationImage" : "http://example.com/aeiou",
  "notificationId" : "notificationId",
  "title" : "title",
  "message" : "message",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 사용자의 현재 팀 조회
 *
 * userId String 
 * returns Team
 **/
exports.getUserTeam = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update User Account
 *
 * body User  (optional)
 * userId String 
 * returns User
 **/
exports.putUserId = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : "userId",
  "email" : "email",
  "password" : "password",
  "phoneNumber" : "phoneNumber",
  "bio" : "bio",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "updated_at" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


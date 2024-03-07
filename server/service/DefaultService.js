'use strict';


/**
 * 사용자 검색
 *
 * userId String 검색할 사용자 아이디
 * returns List
 **/
exports.searchUser = function(userId) {
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


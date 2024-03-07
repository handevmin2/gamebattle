'use strict';


/**
 * 로그인
 *
 * body Auth_login_body 
 * returns Session
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : "userId",
  "auth_header" : "auth_header"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 로그아웃
 *
 * no response value expected for this operation
 **/
exports.logout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 회원가입
 *
 * body User 
 * returns User
 **/
exports.signUp = function(body) {
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


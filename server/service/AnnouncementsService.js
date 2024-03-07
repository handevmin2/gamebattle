'use strict';


/**
 * 새 공지사항 생성
 *
 * body Announcement 
 * no response value expected for this operation
 **/
exports.createAnnouncement = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 공지사항 삭제
 *
 * announcementId String 삭제할 공지사항의 ID
 * no response value expected for this operation
 **/
exports.deleteAnnouncement = function(announcementId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 공지사항 목록 조회
 *
 * returns List
 **/
exports.getAnnouncements = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "announcementId" : "announcementId",
  "title" : "title",
  "datePosted" : "2000-01-23T04:56:07.000+00:00",
  "content" : "content"
}, {
  "announcementId" : "announcementId",
  "title" : "title",
  "datePosted" : "2000-01-23T04:56:07.000+00:00",
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 공지사항 수정
 *
 * body Announcement 
 * announcementId String 수정할 공지사항의 ID
 * no response value expected for this operation
 **/
exports.updateAnnouncement = function(body,announcementId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


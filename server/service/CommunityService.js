'use strict';


/**
 * 새 댓글 생성
 *
 * body Comment 
 * postId String 댓글을 작성할 게시글의 ID
 * no response value expected for this operation
 **/
exports.createComment = function(body,postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 새 게시글 생성
 *
 * body Post 
 * no response value expected for this operation
 **/
exports.createPost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 게시글 삭제
 *
 * postId String 삭제할 게시글의 ID
 * no response value expected for this operation
 **/
exports.deletePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 게시글의 댓글 목록 조회
 *
 * postId String 댓글을 조회할 게시글의 ID
 * returns List
 **/
exports.listComments = function(postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "author",
  "commentId" : "commentId",
  "postId" : "postId",
  "datePosted" : "2000-01-23T04:56:07.000+00:00",
  "content" : "content"
}, {
  "author" : "author",
  "commentId" : "commentId",
  "postId" : "postId",
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
 * 게시글 목록 조회
 *
 * returns List
 **/
exports.listPosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : "author",
  "postId" : "postId",
  "title" : "title",
  "datePosted" : "2000-01-23T04:56:07.000+00:00",
  "content" : "content"
}, {
  "author" : "author",
  "postId" : "postId",
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
 * 게시글 수정
 *
 * body Post 
 * postId String 수정할 게시글의 ID
 * no response value expected for this operation
 **/
exports.updatePost = function(body,postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


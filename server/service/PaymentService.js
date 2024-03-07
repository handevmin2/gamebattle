'use strict';


/**
 * 결제 처리
 *
 * body Payment 
 * returns inline_response_200
 **/
exports.processPayment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message",
  "transactionId" : "transactionId",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


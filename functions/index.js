const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello world!");
});

exports.returnJson = functions.https.onRequest(async (request, response) => {
  if (request.method === "POST" && "GET") {
    if (request.body === undefined) {
      response.status(400).send("データがないやで")
    }
    response.status(200).send(request.body)
  }
  else {
    response.send("なんかおかしいよ")
  }
});

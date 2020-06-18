const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello world!");
});

exports.returnText = functions.https.onRequest((request, response) => {
  if (request.method !== 'POST') {
    response.status(400).send("GETで送ってるやで") 
  }
  if (request.body.date === undefined) {
    response.status(400).send("データがないやで")
  }
  response.send(`date: ${request.body.date}`)
});

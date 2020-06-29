const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.returnColor = functions.https.onRequest((request, response) => {
  const normal = "normal", warning = "warning", partyPeople = "paetyPeople";
  let data;
  let status;

  if (request.body.color.colors === normal || warning || partyPeople ) {
    switch (request.get('content-type')) {
      case 'application/json':
        data = request.body;
        status = 200;
        break;
      default:
        data = "Context-Typeを設定してください";
        status = 400;
        break;
    }
    response.status(status).send(data);
  }
  else {
    response.status(400).send("JSONの値が違います");
  }
});

exports.isLight = functions.https.onRequest((request, response) => {
  let data;
  let status;

  if (request.body.launch === true || request.body.launch === false) {
    switch (request.get('content-type')) {
      case 'application/json':
        data = request.body;
        status = 200;
        break;
      default:
        data = "Context-Typeを設定してください";
        status = 400;
        break;
    }
    response.status(status).send(data);
  }
  else {
    response.status(400).send("JSONの値が違います");
  }
});
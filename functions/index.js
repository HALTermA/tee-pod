const functions = require('firebase-functions');
const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase)
const fireStore = admin.firestore()

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.returnColor = functions.https.onRequest((request, response) => {
  const normal = "normal", warning = "warning", partyPeople = "paetyPeople";
  let data;
  let status;
  const citiesRef = fireStore.collection('tee_pod').doc('status');

  if (request.body.color.colors === normal || warning || partyPeople ) {
    switch (request.get('content-type')) {
      case 'application/json':
        data = request.body.color.colors;
        status = 200;
        citiesRef.set({
          color: data
        })
        break;
      default:
        data = "Context-Typeを設定してください";
        status = 400;
        break;
    }
    response.status(status).send("設定が更新されました");
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


exports.status = functions.https.onRequest((request, response) => {
  let data;
  let httpStatus;
  const citiesRef = fireStore.collection('tee_pod');

  citiesRef.doc('status')
  .set({
    color: 'San Francisco', state: 'CA', country: 'USA',
    capital: false, population: 860000 })

  const cityRef = fireStore.collection('tee_pod').doc('status')
  cityRef.get()
  .then(doc => {
    if (!doc.exists) {
      response.send('No such document!')
    } else {
      response.send(doc.data())
      }
    })
    .catch(err => {
      response.send('not found')
    })
})
const functions = require('firebase-functions');
const admin = require("firebase-admin")
const servisAcount = require("./tee-pod-firebase-adminsdk-p6k1p-eb0cbe3787.json")

admin.initializeApp({
  credential: admin.credential.cert(servisAcount),
  databaseURL: "https://tee-pod.firebaseio.com"
})

const fireStore = admin.firestore()

exports.changeColor = functions.https.onRequest((request, response) => {
  const normal = "normal", warning = "warning", partyPeople = "paetyPeople";
  const changeColorRef = fireStore.collection('tee-pod').doc('status');

  if (Object.keys(request.body).length) {
    if (request.get('content-type') === 'application/json') {
      if (request.body.color.colors.normal === normal) {
        changeColorRef.update({
          color: request.body.color.colors.normal
        })
        .catch(err => response.status.send("データベース側でエラーが起きました", err));
        response.status(200).send("設定を変更しました");
      }
      else if (request.body.color.colors.warning === warning) {
        changeColorRef.update({
          color: request.body.color.colors.warning
        })
        .catch(err => response.status.send("データベース側でエラーが起きました", err));
        response.status(200).send("設定を変更しました");
      }
      else if (request.body.color.colors.partyPeople === partyPeople) {
        changeColorRef.update({
          color: request.body.color.colors.partyPeople
        })
        .catch(err => response.status(400).send("データベース側でエラーが起きました", err));
        response.status(200).send("設定を変更しました");
      }
      else {
        response.status(400).send("JSONの値が違います");
      }
    }
    else {
      response.status(400).send("Context-Typeをapplication/jsonに設定してください");
    }
  }
  else {
    response.status(400).send("JSONをください");
  }
});

exports.isLight = functions.https.onRequest((request, response) => {
  var data;
  let status;
  const lightRef = fireStore.collection('tee-pod').doc('status');

  if (Object.keys(request.body).length) {
    if (request.body.launch === true || request.body.launch === false) {
      switch (request.get('content-type')) {
        case 'application/json':
          data = "設定が更新されました";
          status = 200;
          lightRef.update({
            launch: request.body.launch
          })
          .catch(err => data = "データベース側でエラーが起きました" + err);
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
  }
  else{
    response.status(400).send("JSONをください");
  }
});


exports.status = functions.https.onRequest((request, response) => {
  const statusRef = fireStore.collection('tee-pod').doc('status');

  if (request.method === "POST") {
    statusRef.get()
      .then(doc => !doc.exists ? response.send('No such document!') : response.send(doc.data()))
      .catch(err => response.send(err));
  }
  else {
    response.status(400).send("POSTで通信してください");
  }
})
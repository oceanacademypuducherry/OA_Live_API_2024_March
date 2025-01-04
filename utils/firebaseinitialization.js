const admin = require("firebase-admin");

const secret = require("./firebase_secret.json");

admin.initializeApp({
  credential: admin.credential.cert(secret),
  storageBucket: "oceanlivereact.appspot.com",
});

const myBucket = admin.storage().bucket();

module.exports = { myBucket };

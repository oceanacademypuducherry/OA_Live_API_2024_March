const admin = require("firebase-admin");
require("dotenv").config();
// const secret = require("./firebase_secret.json");
// console.log(process.env.FIREBASE_SECRET);
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE)),
  storageBucket: "oceanlivereact.appspot.com",
});

const myBucket = admin.storage().bucket();

module.exports = { myBucket };

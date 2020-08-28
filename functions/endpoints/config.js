const admin = require("firebase-admin");
const { FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

// Init Admin with credentials
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        client_email: FIREBASE_CLIENT_EMAIL,
        private_key: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        project_id: "ecommerce-ziro",
      }),
      databaseURL: "https://ecommerce-ziro.firebaseio.com",
    })
  : admin.app();

module.exports = app;
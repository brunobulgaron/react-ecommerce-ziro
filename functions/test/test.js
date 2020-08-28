const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Init Admin with credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecommerce-ziro.firebaseio.com'
});

// Instance of the DB
const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  // Wait for the record to be added
  await db.collection('products').add({
    photo: "https://www.thomann.de/pics/bdb/353428/10110937_800.jpg",
    price: 999,
    quantity: 1
  });

  // Returns a callback with 200 response and message
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      data: 'Test data added successfully!'
    })
  });
};
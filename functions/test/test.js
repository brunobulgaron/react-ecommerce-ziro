const admin = require('firebase-admin');
const { FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env

// Init Admin with credentials
admin.initializeApp({
  credential: admin.credential.cert({
    client_email: FIREBASE_CLIENT_EMAIL,
    // private_key:
    //   FIREBASE_PRIVATE_KEY[0] === '-'
    //     ? FIREBASE_PRIVATE_KEY
    //     : JSON.parse(FIREBASE_PRIVATE_KEY),
    private_key: FIREBASE_PRIVATE_KEY,
    project_id: 'ecommerce-ziro',
  }),
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
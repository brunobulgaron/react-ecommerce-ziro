const admin = require('./config');

// Instance of the DB
const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  if(event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      "Access-Control-Allow-Origin": "*"
    }
  }

  // Wait for the record to be added
  const snapshot = await db.collection('products').get();

  const products = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });
  
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(products)
  });
};
const admin = require('./config');

// Instance of the DB
const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  if(event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
      }
    };
  };

  let findDifference = (baseUrl, id) => {
    let diff = "";
    id.split('').forEach(function(val, i){
      if(val != baseUrl.charAt(i))
        diff += val;
    });

    return diff;
  };

  console.log("event.path -->", event.path);

  let differenceOfId = findDifference("/.netlify/functions/deleteProduct/", event.path);

  // Wait for the record to be removed
  await db.collection("products").doc(`${differenceOfId}`).delete();

  // Returns a callback with 200 response and message
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      data: "Produto removido com sucesso.",
    }),
  });
};
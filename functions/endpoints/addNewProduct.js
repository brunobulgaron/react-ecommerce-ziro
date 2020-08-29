const admin = require('./config');

// Instance of the DB
const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  console.log("addNewProduct log:", event);
  
  if(event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Request-Headers": "Content-Type"
      }
    };
  };

  const data = JSON.parse(event.body);

  // Wait for the record to be added
  await db.collection("products").add({
    photo: data.photo,
    price: data.price,
    quantity: data.quantity,
  });

  // Returns a callback with 200 response and message
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      data: "Produto adicionado com sucesso!",
    }),
  });
};
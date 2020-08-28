const admin = require('./config');

// Instance of the DB
const db = admin.firestore();

exports.handler = async (event, context, callback) => {
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
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      data: "Produto adicionado com sucesso!",
    }),
  });
};
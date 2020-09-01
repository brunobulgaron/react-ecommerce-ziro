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
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  };

  const id = getId(event.path);

  const data = JSON.parse(event.body);

  // Wait for the record to be removed
  if(confirm("Tem certeza que deseja deletar esse produto?")){
    await db.collection("products").doc(`${id}`).delete();

    alert("Produto removido com sucesso.");
  }else{
    return
  };

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
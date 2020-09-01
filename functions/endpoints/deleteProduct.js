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

  let differenceOfId = findDifference("https://mystifying-chandrasekhar-4d2fb6.netlify.app/.netlify/functions/deleteProduct/", event.path);

  // Wait for the record to be removed
  if(confirm("Tem certeza que deseja deletar esse produto?")){
    await db.collection("products").doc(`${differenceOfId}`).delete();

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
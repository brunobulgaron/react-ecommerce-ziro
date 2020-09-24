import { get } from 'axios';

exports.handler = async (event, context, callback) => {
  if(event.httpMethod === 'OPTIONS') {
    return callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: "Testeeee"
    });
  };

  const cepFrontEnd = JSON.parse(event.body);

  const result = await get(`https://viacep.com.br/ws/${cepFrontEnd}/json/`);
  
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(result)
  });
}
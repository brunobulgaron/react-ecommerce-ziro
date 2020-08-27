exports.handler = async event => {
  const allProducts = [
    {
      "id": 1,
      "name": "Camiseta",
      "price": "99",
      "quantity": "50",
      "photo": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 2,
      "name": "Calça Jeans",
      "price": "150",
      "quantity": "30",
      "photo": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      "id": 3,
      "name": "Allstar",
      "price": "200",
      "quantity": "10",
      "photo": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
  ]
  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(allProducts)
  }
}
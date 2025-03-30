//load our Express
const express = require('express');
//Create our server
const app = express();
//Our port
const PORT = 3000;

//DEFINE OUR PRODUCTS OR ITEMS ON JSON FILE
const items = require('./data/items.json');

//everything on our public folder will be accesible in our http://localhost:3000/

app.use(express.static('public'));

//this create a rout to our json
app.get('/api/items', (req, res) => {
  res.json(items);
});


//we start our server through our port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

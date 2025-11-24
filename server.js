const express = require("express");
const app = express();
const PORT = 8000;
const products = {
  "less than temperature": {
    water: "Dont water when forecast temperature is less than",
    temp: 68,
  },
  "water less than 30 percent": {
    water: "Water 30% less when todays forecast temperature is less than",
    temp: 77,
  },
  "water more than 30 percent": {
    water: "Water 30% more when todays forecast temperature is above",
    temp: 86,
  },
  "unknown": {
    water: "no water",
    temp: 0,
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const waterProducts = req.params.name.toLowerCase()
  
  if( products[waterProducts] ){
    res.json(products[waterProducts])
  }else{
    res.json(products['unknown'])
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}!`);
});

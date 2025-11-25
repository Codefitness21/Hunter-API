//Since I'm using express, it needs to be required for use.
const express = require("express");
//can use all the methods that came with express 
const app = express();
const cors = require('cors')
//Set up port we want it to be on.
const PORT = 8000;

app.use(cors())

//simple json object. products is the object. products is the property that has the value of the object.
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

//get is a method that comes with express and can plug stuff into this get and will have the req and res callbacks. This is a network request and fires function within the get kind of like an event listener. I want to send a file, which is index.html and have to tell it where to find this file and look for it in the current directory (dirname), which is the root and you'l find the html file. But if that's the case we need to make an index.html file. get req for the main page.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Make a get request if they want to ping our server. We're going to use the /api route. When req is made to api, want to respsond with json. get request for if they type in something slightly different like /api.  
//How we can use query parameters can ask for specific information and not get the entire object back. After the /api/: you can add a name for the query parameter, which allows me to req.params.name, when using query parameters so I'll use 'name' as an example. so if there is a word after /api/ I can grab it with this bit of code req.params.name. 
app.get("/api/:name", (req, res) => {
  const waterProducts = req.params.name.toLowerCase()
//Can't use dot notation due to spaces so we use brackets. seeing if waterProducts exist within the products object.
  if( products[waterProducts] ){
    res.json(products[waterProducts])
  }else{
    res.json(products['unknown'])
  }
});

//Telling the server to listen and what to do and where to listen. 
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}!`);
});

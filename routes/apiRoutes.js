// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Signup = require("../models/signup.js");

// Routes
// =============================================================
module.exports = function(app) {
// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

  app.get('/webhook/', function(req,res){
    if (req.query['hub.verify_token'] === "jimmyd2923"){
        res.send(req.query['hub.challenge'])
    }
    res.send("wrong shit")
})
  app.post("/api/newUser", function(req, res) {
    // Take the request...
    var signup = req.body;

    // Create a routeName

 




    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Signup.create({
        user_email: signup.user_email,
        user_password: signup.user_password,
        name: signup.name,
        last_name: signup.last_name,
        scores_id: signup.scores_id
    });

    res.status(204).end();
  });
};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Signup = require("../models/signup.js");

// Routes
// =============================================================
module.exports = function(app) {
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

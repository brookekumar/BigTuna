// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");



// Creates a "Character" model that matches up with DB
var Signup = sequelize.define("signup", {
  // the name of the character (a string)
  user_email: Sequelize.STRING,
  // the character's role (a string)
  user_password: Sequelize.STRING,
  // the character's age (a string)
  name: Sequelize.STRING,
  
  // and the character's force points (an int)
  last_name: Sequelize.STRING,

  scores_id: Sequelize.STRING
// }, {
//   // disable the modification of tablenames; By default, sequelize will automatically
//   // transform all passed model names (first parameter of define) into plural.
//   // if you don't want that, set the following
//   //freezeTableName: true
 });

// Syncs with DB
Signup.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Signup;

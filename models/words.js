// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config");

// Creates a "Word" model that matches up with DB
var Yeshi = sequelize.define("ainaidar", {
  word: Sequelize.STRING,
  partOfSpeech: Sequelize.STRING,
  pronunciation: Sequelize.STRING,
  meaning: Sequelize.STRING,
  notes: Sequelize.STRING,
  orthography: Sequelize.STRING 
});

// Syncs with DB
Yeshi.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Yeshi;
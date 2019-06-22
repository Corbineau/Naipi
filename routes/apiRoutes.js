var express = require("express");
var router = express.Router();

// Import the model 
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    // GET route for getting the full lexicon for Ai-Naidar
    app.get("/api/ainaidar", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.Ainaidar.findAll({}).then(function(dbAinaidar) {
        // We have access to the words as an argument inside of the callback function
        res.json(dbWord);
      });
    });
  

    app.post("/api/ainaidar", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Ainaidar.create({
          word: req.body.word,
          pronounciation: req.body.pronounciation,
          partOfSpeech: req.body.partOfSpeech,
          meaning: req.body.meaning,
          notes: req.body.notes,
          orthography: req.body.orthography
        }).then(function(dbAinaidar) {
          // We have access to the new Ainaidar as an argument inside of the callback function
          res.json(dbAinaidar);
        })
          .catch(function(err) {
          // Whenever a validation or flag fails, an error is thrown
          // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
          });
      });

    // DELETE route for deleting words from the aiNaidar table. We can get the id of the Ainaidar to be deleted from
  // req.params.id
  app.delete("/api/ainaidar/:id", function(req, res) {
    // We just have to specify which Ainaidar we want to destroy with "where"
    db.Ainaidar.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAinaidar) {
      res.json(dbAinaidar);
    });

  });

  // PUT route for updating words in the aiNaidar table. We can get the updated Ainaidar data from req.body
  app.put("/api/ainaidar", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Ainaidar.update({
        word: req.body.word,
        pronounciation: req.body.pronounciation,
        partOfSpeech: req.body.partOfSpeech,
        meaning: req.body.meaning,
        notes: req.body.notes,
        orthography: req.body.orthography
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbAinaidar) {
      res.json(dbAinaidar);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      
        res.json(err);
      });
  });
};

// Export routes for server.js to use.
module.exports = router;
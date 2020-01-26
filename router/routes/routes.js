const express = require("express");
// const router = express.Router();
const db = require("../../config/config.js");
const Sequelize = require("sequelize");

// module.exports = (app, db) => {

//   //Get gig list
//   app.get("/", (req, res) => {
//     console.log(db);
//     db.cocktail.findAll({
//     })
//       .then(cocktail => {
//         console.log(cocktail);
//         res.render("index", { cocktail: cocktail });
//       })
//       .catch(err => console.log(err))
//   });
// };

module.exports = (app, db) => {

  //Get gig list
  app.get("/index", (req, res) => {
    console.log(db);
    db.cocktail.findAll({
    })
      .then(cocktail => {
        console.log(cocktail);
        res.render("index", { cocktail: cocktail });
      })
      .catch(err => console.log(err))
  });

    // Add a new data into the database
    // app.post("/index", function(req, res) {

    //   console.log("Chirp Data:");
    //   console.log(req.body);
  
    //   Chirp.create({
    //     author: req.body.author,
    //     body: req.body.body,
    //     created_at: req.body.created_at
    //   }).then(function(results) {
    //     // `results` here would be the newly created chirp
    //     res.end();
    //   });
  
    // });
};




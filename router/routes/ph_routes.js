
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
  app.get("/", (req, res) => {
    console.log(db);
    db.cocktail.findAll({
    })
      .then(cocktail => {
        console.log(cocktail);
        res.json(cocktail);
      })
      .catch(err => console.log(err))
  });

  app.get("/result", (req, res) => {
    console.log(db);
    db.cocktail.findAll({
      include:[
        {
          model:db.ingredients,
          as:"listofingredients"
        }
      ]
    })
      .then(cocktail => {
        console.log(cocktail);
        res.json(cocktail);
      })
      .catch(err => console.log(err))
  });
};


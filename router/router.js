
const express = require("express");
const router = express.Router();
const db = require("../config/config.js");
const Sequelize = require("sequelize");


//Get gig list
router.get("/", (req, res) =>
    db.cocktail.findAll({
        include:[
            {model: db.image}
        ]
    })
        .then( cocktail => {
            res.render("index");
        })
        .catch(err => console.log(err)));

  // Add a data supplied by user to database
  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    db.category.create({
      db.category: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};


//Display add gig form
router.get("/add", (req, res) => res.render("add"));


  

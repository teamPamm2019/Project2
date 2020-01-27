const express = require("express");
const db = require("../../config/config.js");
const Sequelize = require("sequelize");



module.exports = (app) => {

  //Get gig list
  app.get("/index", (req, res) => {
    console.log(db);
    db.cocktail.findAll({
      //  where: {drinkcategories_id: 2},
    })
      .then(cocktail => {
        console.log(cocktail);
        res.render("index", { cocktail: cocktail });
      })
      .catch(err => console.log(err))
  });

  app.post("/results", function (req, res) {
    // Take the request...
    var bar = req.body;


    var routeName = bar.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Bar.create({
      routeName: routeName,
      category: bar.category,
      drink: drink.role,
      images: bar.images,
      ingredients: bar.ingredients,
      method:bar.method
    });

    res.status(204).end();
  });
};





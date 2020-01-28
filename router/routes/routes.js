// const express = require("express");
const Bar = require("../../models/bar.js");
// const Sequelize = require("sequelize");



module.exports = (app) => {

  app.get("/index", (req, res) => {
    console.log(Bar);
    Bar.findAll({
    })
      .then(bar => {
        console.log(bar);
        res.render("index", { bar: bar });
      })
      .catch(err => console.log(err))
  });

  app.get("/results/:id", (req, res) => {
    // console.log(db);
    Bar.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(bar => {
        let resultdrink = bar.drink
        let resultimage = bar.image
        let resultingredient= bar.ingredients
        let resultmethod= bar.method
        res.render("results", {drink:resultdrink ,image:resultimage , ingredients: resultingredient, method: resultmethod});
      })
      .catch(err => console.log(err))
  });



  // Add a drink

  app.post("/add", function(req, res) {
    console.log(req.body);
    Bar.create({
      category: req.body.category,
      drink: req.body.drink,
      images: req.body.image,
      ingredients: req.body.ingredients,
      method: req.body.method,
    }).then(function(results) {
      res.end();
    });
  });
};





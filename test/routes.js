
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
//         res.render("i", { cocktail: cocktail });
//       })
//       .catch(err => console.log(err))
//   });
// };

module.exports = (app, db) => {

  //Get gig list
  app.get("/", (req, res) => {
    console.log(db);
    db.cocktail.findAll({ 
    //   include:[
    //   {model: db.ingredients, attributes:["ingredients"]},
    //   {model: db.method, attributes:["method"]}
    // ]
    })
      .then(cocktail => {
        res.render("index", {cocktail: cocktail});
      })
      .catch(err => console.log(err))
  });

  app.get("/results/:id", (req, res) => {
    // console.log(db);
    db.cocktail.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(cocktail => {
        let resultdrink= cocktail.drink
        let resultingredient= cocktail.ingredients
        let resultmethod= cocktail.method


        // res.json(cocktail)
        res.render("results", {ingredients: resultingredient, method: resultmethod});

      })
      .catch(err => console.log(err))
  });
  
};



// This is how to joing multiple tables
// db.cocktail.findAll({ 
//     include:[
//     {model: db.ingredients, attributes:["ingredients"]},
//     {model: db.method, attributes:["method"]}
//   ]
//   })

// trying to build my own json
// number = Object.entries(cocktail)

// let arr = []
// let drinks={}
// let id={}
// let ingredients={}

// // res.json((cocktail))

// for (let i = 0; i < number.length; i++) {
//   drinks[`${i}`] = cocktail[i].drink;
//   id[`${i}`] = cocktail[i].id;
//   ingredients[`${i}`] = cocktail[i].ingredients[i]
//   }
// console.log(id)
// console.log(drinks)
// console.log(ingredients)
// console.log(obj)
// console.log(cocktail[0].dataValues.drink)

// Requiring our models
  // =============================================================
const Bar = require("../../models/bar.js");


module.exports = (app) => {

  // Find cocktails  by category (eg. whiskey, tequila, vodka or rum)
  // =============================================================
  app.get("/index/:category", (req, res) => {
    console.log(Bar);
    Bar.findAll({
      where: {
        category: req.params.category.toLowerCase()
      }
    })
      .then(bar => {
        console.log(bar);
        res.render("index", { bar: bar });
      })
      .catch(err => console.log(err))
  });

  // Find all cocktails 
  // =============================================================
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

  // Find one cocktail with the id in req.params.id 
  // =============================================================
  app.get("/results/:id", (req, res) => {

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



  // Create an cocktail with the data available to us in req.body
  // =============================================================
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





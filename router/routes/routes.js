

module.exports = (app, db) => {

  //Get gig list
  app.get("/", (req, res) => {
    console.log(db);
    db.cocktail.findAll({
    })
      .then(cocktail => {
        console.log(cocktail);
        res.render("index", { cocktail: cocktail });
      })
      .catch(err => console.log(err))
  });
};


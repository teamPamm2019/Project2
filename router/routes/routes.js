

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

<<<<<<< HEAD
=======

>>>>>>> 830f917593a28b8aa70b5573d86557aa62bbce1d

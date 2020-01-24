
// const express = require("express");
// // const router = express.Router();
// const db = require("../../config/config.js");
// const Sequelize = require("sequelize");

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

// module.exports = (app, db) => {
//   app.post("/resuls", (req, res) => {
//     const newCocktail = req.body.post;
//     db.cocktails.create({
//       drink: newCocktail.drink,
//       images: newCocktail.drink,
//       // created_at: created_at
//     })
//       .then(post => {
//         res.json(post);
//       });
//   });
// };
// Add a data supplied by user to database
// Add a chirp


// app('/index', (req, res) => {
//   // const created_at = new Date();
//   const newUser = req.body.user;
//   db.category.create({
//     username: newUser.username,
//     role: newUser.role,
//     created_at: created_at
//   })
//     .then(user => {
//       res.json(user);
//     });
// });



// //Display add gig form
// router.get("/results", (req, res) => res.render("results"));




//     reuter.post("/index", (req, res) => {
//       const newCategory = req.body.user;
//       db.category.create({
//         category: newCategory.username,
//         // role: newUser.role,
//         // created_at: created_at
//       })
//       .then(user => {
//         res.json(user);
//       });
//     });

//     reuter.post("/index", (req, res) => {
//       const newCocktail = req.body.post;
//       db.cocktails.create({
//         drink: newCocktail.drink,
//         cat_id: cat_id,
//         // created_at: created_at
//       })
//       .then(post => {
//         res.json(post);
//       });
//     });

//     reuter.post("/index", (req, res) => {
//       const newComment = req.body.comment;
//       db.images.create({
//         post_id: newComment.post_id,
//         content: newComment.content,
//         commenter_username: newComment.commenter_username,
//         commenter_email: newComment.commenter_email,
//         // created_at: created_at
//       })
//         .then(comment => {
//           res.json(comment);
//         });
//     });

//     reuter.post("/index", (req, res) => {
//       const newPost = req.body.post;
//       db.ingredients.create({
//         user_id: newPost.user_id,
//         content: newPost.content,
//         // created_at: created_at
//       })
//       .then(post => {
//         res.json(post);
//       });
//     });

//     app.post("/index", (req, res) => {
//       const newPost = req.body.post;
//       db.method.create({
//         user_id: newPost.user_id,
//         content: newPost.content,
//         // created_at: created_at
//       })
//       .then(post => {
//         res.json(post);
//       });
//     });



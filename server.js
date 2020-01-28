// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************


// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;


// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Handlebars
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Set static folder
// =============================================================
app.use(express.static(path.join(__dirname, "/public")));

// Routes
require("./router/routes/routes.js")(app);


// Index routes
// =============================================================
app.get("/index", (req,res) => res.render("index",({ defaultLayout: "main" })));
app.get("/add", (req,res) => res.render("add",({ defaultLayout: "main" })));
app.get("/", (req,res) => res.render("home",({ defaultLayout: "main" })));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});

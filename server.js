const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const Sequelize = require("sequelize");

// // Database
db = require('./config/config.js')


// Test DB
db.authenticate()
    .then(() => console.log("Database connected...."))
    .catch(err => console.log("Error: " + err))

const app = express();

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


//Set static folder
app.use(express.static(path.join(__dirname,"public")));

//Index route
app.get("/", (req,res) => res.render("index"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));

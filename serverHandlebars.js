

var express = require("express");
var app = express();
var exphbs = require("express-handlebars");

// Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(8080, () => {
  console.log('Server is listening on port 🌎', 8080);
});
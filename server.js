const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const router = require('./router/index');

const Sequelize = require("sequelize");

// Database
db = require('./config/config.js')


const app = express();

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));


//Set static folder
app.use(express.static(path.join(__dirname,"./db/images")));


// require("./router/routes/routes.js")(app);

router(app, db);

//Index route
app.get("/index", (req,res) => res.render("index",({ defaultLayout: "main" })));
app.get("/", (req,res) => res.render("results",({ defaultLayout: "main" })));
// app.get("/results", (req,res) => res.render("results",({ defaultLayout: "main" })));



// app.use("/gigs", require("./route/gigs"));

const PORT = process.env.PORT || 5000;


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('Express listening on port:', PORT);
    });
});

// app.listen(PORT, console.log(`server started on port ${PORT}`));

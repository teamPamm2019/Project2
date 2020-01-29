// Dependencies
const Sequelize = require("sequelize");


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("VirtualBar", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

=======
const sequelize = new Sequelize("SpeakEZ",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
    operatorAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });


// Test DB
sequelize.authenticate()
  .then(() => console.log("Database connected...."))
  .catch(err => console.log("Error: " + err))

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.category = require("../models/category.js")(sequelize, Sequelize);
db.cocktail = require("../models/cocktail.js")(sequelize, Sequelize);
db.images = require("../models/images.js")(sequelize, Sequelize);
db.ingredients = require("../models/ingredients.js")(sequelize, Sequelize);
db.method = require("../models/method.js")(sequelize, Sequelize);

//Relations
db.images.belongsTo(db.cocktail);
db.cocktail.hasMany(db.images);
db.ingredients.belongsTo(db.cocktail);
db.cocktail.hasMany(db.ingredients);
db.method.belongsTo(db.cocktail);
db.cocktail.hasMany(db.method);
db.cocktail.belongsTo(db.category);
db.category.hasMany(db.cocktail);

module.exports = db;



// Set up mysql connection.
const Sequelize = require("sequelize");

const sequelize = new Sequelize("SpeakEZ",
"root",
"Toronbolo777",
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
db.images.belongsTo(db.cocktail,{ foreignKey: "cocktails_id" });
db.cocktail.hasMany(db.images,{ foreignKey: "cocktails_id" });
db.ingredients.belongsTo(db.cocktail,{ foreignKey: "cocktails_id" });
db.cocktail.hasMany(db.ingredients,{ foreignKey: "cocktails_id" });
db.method.belongsTo(db.cocktail,{ foreignKey: "cocktails_id" });
db.cocktail.hasMany(db.method,{ foreignKey: "cocktails_id" });
db.cocktail.belongsTo(db.category,{ foreignKey: "drinkcategories_id" });
db.category.hasMany(db.cocktail,{ foreignKey: "drinkcategories_id" });

module.exports = db;


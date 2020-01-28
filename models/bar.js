// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/config.js");
    
    
    const Bar = sequelize.define("bar", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: Sequelize.STRING
        },
        drink: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.TEXT
        },
        ingredients: {
            type: Sequelize.TEXT
        },
        method: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });

    // Syncs with DB
Bar.sync();

// Makes the Bar Model available for other files (will also create a table)
module.exports = Bar;
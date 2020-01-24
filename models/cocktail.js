
module.exports = (sequelize, Sequelize) => {
    const Wow = sequelize.define("cocktails", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        drink: {
            type: Sequelize.STRING
        },
        images: {
            type: Sequelize.TEXT
        },
        drinkcategories_id: {
            type: Sequelize.INTEGER,
            allowNull: false
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
    return Wow
};
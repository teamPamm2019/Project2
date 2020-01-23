
module.exports = (sequelize, Sequelize) => {
    const Cock = sequelize.define("cocktails", {
        cocktails_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        drink: {
            type: Sequelize.STRING
        },
        cat_id: {
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
    return Cock
};
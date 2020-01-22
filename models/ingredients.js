module.exports = (sequelize, Sequelize) => {
    const Ing = sequelize.define("ingredients", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ingredients: {
            type: Sequelize.STRING
        },
        cocktails_id: {
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
    return Ing
};
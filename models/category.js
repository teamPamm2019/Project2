
module.exports = (sequelize, Sequelize) => {
    const Cat = sequelize.define("drinkcategories", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type: Sequelize.STRING
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
    return Cat
};

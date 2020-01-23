module.exports = (sequelize, Sequelize) => {
    const Ima = sequelize.define("imagesdrink", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        images: {
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
    return Ima
};
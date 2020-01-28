
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
        ingredients: {
            type: Sequelize.STRING
            },
        method: {
            type: Sequelize.STRING
        }

    },{timestamps: false }); 
    return Wow
};



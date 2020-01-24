
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
        drinkcategories_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }, 
    },{timestamps: false }); 
    // ^disaple timestamps with this
    return Wow
};



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
});

const initializeDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database successful');
        await sequelize.sync({force: false});
    } catch(error) {
        console.error('Cannot connect to database', error);
    }
};

module.exports = { sequelize, initializeDb };
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');
const Book = require('./bookModel');

const Library = sequelize.define('Libraries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    paranoid: true,
    timestamps: true,
});



Library.hasMany(Book, { foreignKey: 'libraryId' });

Book.belongsTo(Library, { foreignKey: 'libraryId' });

module.exports = Library;
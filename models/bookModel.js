const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    libraryId: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puede no pertenecer a una biblioteca.
    },
},
{
    paranoid: true,
    timestamps: true,
});

module.exports = Book;
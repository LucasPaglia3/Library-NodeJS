const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
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
    libraryid: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puede no pertenecer a una biblioteca.
    },
});

module.exports = Book;
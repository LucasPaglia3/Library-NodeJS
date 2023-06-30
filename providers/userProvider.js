const { Op } = require('sequelize');
const { userModel } = require('../models');
const User = require('../models/userModel');

const createUser = async (user) => {
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch(error) {
        console.error('Could not create a new user', error);
        throw error;
    }
};

const getUser = async (userId) => {
    try {
        const user = await userModel.findByPk(userId);
        return user;
    } catch(error) {
        console.error('Could not get user!');
        throw error;
    }
}

const getAllUsers = async () => {
    try {
        const users = await userModel.findAll({ include: { all: true }});
        return users;
    } catch(error) {
        console.error('Could not get user!');
        throw error;
    }
}

const validateUser = async (options) => {
    try {
        const userFound = await User.findAll({ // Busca entre todos los Users, al que coincida con las options que se le pasó.
            where: {
                    user: options.user,
                    password: options.pass,
            },
        });
        if(userFound.length !== 0) { // Si encontro 1 user devuelve ese user (? creo que es eso.)
            return userFound;
        }
        return false;
    } catch(error) {
        console.error('Could not validate user!', error);
        return false;
    }
}

module.exports = { createUser, getUser, getAllUsers, validateUser };
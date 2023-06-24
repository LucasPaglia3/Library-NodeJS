const { userModel } = require('../models');

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

module.exports = { createUser, getUser };
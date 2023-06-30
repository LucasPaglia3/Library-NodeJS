const { userProvider } = require('../providers');

const createUser = async (user) => {
    return await userProvider.createUser(user);
};

const getUser = async (userId) => {
    return await userProvider.getUser(userId);
};

const getAllUsers = async() => {
    return await userProvider.getAllUsers();
}

const validateUser = async (user, pass) => {
    const userFound = await userProvider.validateUser({ user, pass });
    return userFound;
}

module.exports = { createUser, getUser, validateUser, getAllUsers };
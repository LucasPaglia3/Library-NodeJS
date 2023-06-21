const { userProvider } = require('../providers');

const createUser = async (user) => {
    return await userProvider.createUser(user);
};

const getUser = async (userId) => {
    return await userProvider.getUser(userId);
};

module.exports = { createUser, getUser };
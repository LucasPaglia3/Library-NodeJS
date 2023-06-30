const { userService } = require('../services');

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.userId);
        if(!user) {
            res.status(404).json({ message: `User with ID: ${req.params.userId} does not exist!`});
        } else {
            res.json(user);
        }
    } catch(error) {
        res.status(500).json({ action: 'getUser', error: error.message});
    };
};

const getAllUsers = async (req, res) => { 
    const users = await userService.getAllUsers();
    if(!users) {
        res.status(404).json( { action: 'getAllUsers', message: 'No users found!'});
    } else {
        res.json(users);
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch(error) {
        res.status(500).json({ action: 'createUser', error: error.message});
    };
}

module.exports = { getUser, createUser, getAllUsers };
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { SERVER_SECRET } = require('../middlewares/auth-mdw');

router.post('/', (req, res) => {
    const { user, pass } = req.body;
    if(user === 'admin' && pass === 'admin') {
        const token = jwt.sign( {user, role: 'Admin'}, SERVER_SECRET);
        res.json(token);
    } else {
        res.status(401).json( {error: 'Invalid user or password'} );
    }
});

module.exports = router;
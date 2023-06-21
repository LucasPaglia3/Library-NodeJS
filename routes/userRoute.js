const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.route('/').post( userController.createUser );
router.route('/:userId').get( userController.getUser );

module.exports = router;

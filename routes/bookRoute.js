const express = require('express');
const router = express.Router();
const { jwtValidMDW } = require('../middlewares/auth-mdw');
const { bookController } = require('../controllers');

router.get('/', bookController.getAllBooks);
router.get('/:bookid', bookController.getBook);
router.post('/', jwtValidMDW, bookController.createBook);
router.put('/:bookid', jwtValidMDW, bookController.updateBook);
router.delete('/:bookid', jwtValidMDW, bookController.deleteBook);

module.exports = router;
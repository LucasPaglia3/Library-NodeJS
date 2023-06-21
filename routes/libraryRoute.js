const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');

router.route('/').get( libraryController.getLibraryController );

router.route('/:id').get((req, res) => {
    res.json({ message: `Get library with ID: ${req.params.id}`});
});

router.route('/:libraryId').post( libraryController.createLibraryController );

router.route('/:id').put((req, res) => {
    res.json({ message: `Update library with ID: ${req.params.id}`});
});

router.route('/:id').delete((req, res) => {
    res.json({ message: `Delete library with ID: ${req.params.id}`});
});

module.exports = router;

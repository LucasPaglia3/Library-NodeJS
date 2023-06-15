const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.json({ message: 'Get all libraries'});
});

router.route('/:id').get((req, res) => {
    res.json({ message: `Get library with ID: ${req.params.id}`});
});

router.route('/').post((req, res) => {
    res.json({ message: 'Create library'});
});

router.route('/:id').put((req, res) => {
    res.json({ message: `Update library with ID: ${req.params.id}`});
});

router.route('/:id').delete((req, res) => {
    res.json({ message: `Delete library with ID: ${req.params.id}`});
});

module.exports = router;

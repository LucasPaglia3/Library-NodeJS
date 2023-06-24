const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');

router.get('/', libraryController.getAllLibraries ); // Obtener todas las biblioteca

router.get('/:libraryid', libraryController.getLibrary );// Obtener una biblioteca especifica

router.post('/:libraryid/book', libraryController.createBook ); // Crear un libro que pertenece a una biblioteca

router.put('/:id', (req, res) => { // Actualizar una biblioteca por id
    res.json({ message: `Update library with ID: ${req.params.id}`});
});

router.route('/:id').delete((req, res) => { // Eliminar una biblioteca por id
    res.json({ message: `Delete library with ID: ${req.params.id}`});
});

module.exports = router;

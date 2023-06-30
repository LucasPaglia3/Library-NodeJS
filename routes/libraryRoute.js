const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { jwtValidMDW } = require('../middlewares/auth-mdw')

router.get('/', libraryController.getAllLibraries ); // Obtener todas las biblioteca

router.get('/:libraryid', libraryController.getLibrary );// Obtener una biblioteca especifica

router.post('/', jwtValidMDW, libraryController.createLibrary ); // Crear una biblioteca

router.post('/:libraryid/book', jwtValidMDW, libraryController.createBook ); // Crear un libro que pertenece a una biblioteca

router.put('/:libraryid', jwtValidMDW, libraryController.updateLibrary ); // Modificar una biblioteca

router.delete('/:libraryid', jwtValidMDW, libraryController.deleteLibrary ); // Elimina una biblioteca

module.exports = router;

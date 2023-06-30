const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { userIsAdminMdw } = require('../middlewares/auth-mdw')

router.get('/', libraryController.getAllLibraries ); // Obtener todas las biblioteca

router.get('/:libraryid', libraryController.getLibrary );// Obtener una biblioteca especifica

router.post('/', userIsAdminMdw, libraryController.createLibrary ); // Crear una biblioteca

router.post('/:libraryid/book', userIsAdminMdw, libraryController.createBook ); // Crear un libro que pertenece a una biblioteca

router.put('/:libraryid', userIsAdminMdw, libraryController.updateLibrary ); // Modificar una biblioteca

router.delete('/:libraryid', userIsAdminMdw, libraryController.deleteLibrary ); // Elimina una biblioteca

module.exports = router;

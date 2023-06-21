const { libraryService } = require('../services');

const getLibraryController = (req, res) => {
    res.json({ message: 'Get all libraries'});
};

const createLibraryController = (req, res) => {
    const newLibrary = libraryService.createLibrary(req.params.libraryId, req.body);
    res.json(newLibrary);
}

module.exports = { getLibraryController, createLibraryController };
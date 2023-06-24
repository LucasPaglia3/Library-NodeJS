const { libraryService } = require('../services');

const getAllLibraries = async (req, res) => {
    const libraries = await libraryService.getAllLibraries();
    if(!libraries) {
        res.status(404).json({ action: 'getAllLibraries', error: 'No libraries found!'});
    } else {
        res.json(libraries);
    }   
};

const getLibrary = async (req, res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryid);
        if(!library) {
            res.status(404).json({ action: 'getLibrary', error: 'Library does not exist!'});
        } else {
            res.json(library);
        }
    } catch(error) {
        res.status(500).json({ action: 'getLibrary', error: error.message });
    }
}

const createLibrary = async (req, res) => {
    try {
        const newLibrary = libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (error) {
        res.status(500).json({ action: 'createLibrary', error: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const library = libraryService.createBook(req.params.libraryid, req.body);
        if(!library) {
            res.status(404).json({ action: 'createBook', error: 'Library does not exist!'});
        } else {
            res.json(library);
        }
    } catch(error) {
        res.status(500).json({ action: 'createBook', error: error.message });
    }
}

module.exports = { getLibrary, getAllLibraries, createLibrary, createBook };
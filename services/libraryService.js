const { libraryProvider } = require('../providers');

const createLibrary = async (library) => { 
    return await libraryProvider.createLibrary(library);
};

const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if(library) {
        const newBook = await libraryProvider.createBook(libraryId, book);
        return newBook;
    }
    return null;
};

const getLibrary = async (libraryId) => {
    return await libraryProvider.getLibrary(libraryId);
};

const getAllLibraries = async() => {
    return await libraryProvider.getAllLibraries();
}

module.exports = {createLibrary, getLibrary, getAllLibraries, createBook};
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
};

const updateLibrary = async(libraryId, libraryUpd) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if(library) {
        const updatedBook = await libraryProvider.updateLibrary(libraryId, libraryUpd);
        return updatedBook;
    }
    return null;
}

const deleteLibrary = async(libraryId) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if(library) {
        const libraryToDelete = await libraryProvider.deleteLibrary(libraryId);
        return libraryToDelete;
    }
    return null;
}

module.exports = {createLibrary, getLibrary, getAllLibraries, createBook, updateLibrary, deleteLibrary};
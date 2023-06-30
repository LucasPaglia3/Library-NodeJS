const { libraryModel } = require('../models');
const { bookModel } = require('../models');

const createLibrary = async (library) => {
    try {
        const newLibrary = await libraryModel.create(library);
        return newLibrary;
    } catch(error) {
        console.error('Could not create a new library', error);
        throw error;
    };
};

const createBook = async (libraryId, book) => {
    try {
        const newBook = await bookModel.create( { ...book, LibraryId: libraryId } );
        return newBook;
    } catch(error) {
        console.error('Could not create a new book', error);
        throw error;
    };
};

const getLibrary = async (libraryid) => {
    try {
        const library = await libraryModel.findByPk(libraryid, { include: { all: true }});
        return library;
    } catch(error) {
        console.error('Could not get library!', error);
        throw error;
    };
};

const getAllLibraries = async() => {
    try {
        const libraries = await libraryModel.findAll({ include: { all: true }});
        return libraries;
    } catch(error) {
        console.error('Could not get libraries!', error);
        throw error;
    };
};

const updateLibrary = async (libraryid, libraryUpd) => {
    try {       
        const library = await libraryModel.findByPk(libraryid);
            if(library) {
                library.name = libraryUpd.name;
                library.location = libraryUpd.location;
                library.telephone = libraryUpd.telephone;
                await library.save();
            }
    } catch (error) {
        console.error('Could not update library!', error);
        throw error;
    }
};

const deleteLibrary = async (libraryid) => {
    try {
        const library = await libraryModel.findByPk(libraryid);
        if(library) {
            await library.destroy({where: {id: libraryid}});
        }
    } catch(error) {
        console.error('Could not delete library!', error);
    }
};

module.exports = { createLibrary, getLibrary, getAllLibraries, createBook, updateLibrary, deleteLibrary };
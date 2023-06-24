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
        const newBook = await bookModel.create( {...book, libraryid: libraryId} );
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
        console.error('Could not get library!');
        throw error;
    };
};

const getAllLibraries = async() => {
    try {
        const libraries = await libraryModel.findAll();
        return libraries;
    } catch(error) {
        console.error('Could not get libraries!');
    };
};

module.exports = { createLibrary, getLibrary, getAllLibraries, createBook };
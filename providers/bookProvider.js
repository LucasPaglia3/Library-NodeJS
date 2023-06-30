const { bookModel } = require('../models');

const createBook = async (book) => {
    try {
        const newbook = await bookModel.create(book);
        return newbook;
    } catch(error) {
        console.error('Could not create a new book', error);
        throw error;
    };
};

const getBook = async (bookid) => {
    try {
        const book = await bookModel.findByPk(bookid, { include: { all: true }});
        return book;
    } catch(error) {
        console.error('Could not get book!', error);
        throw error;
    };
};

const getAllBooks = async() => {
    try {
        const books = await bookModel.findAll({ include: { all: true }});
        return books;
    } catch(error) {
        console.error('Could not get books!', error);
        throw error;
    };
};

const updateBook = async (bookid, bookUpd) => {
    try {       
        const book = await bookModel.findByPk(bookid);
            if(book) {
                book.name = bookUpd.name;
                book.location = bookUpd.location;
                book.telephone = bookUpd.telephone;
                await book.save();
            }
    } catch (error) {
        console.error('Could not update book!', error);
        throw error;
    }
};

const deleteBook = async (bookid) => {
    try {
        const book = await bookModel.findByPk(bookid);
        if(book) {
            await book.destroy({where: {id: bookid}});
        }
    } catch(error) {
        console.error('Could not delete book!', error);
    }
};

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook };
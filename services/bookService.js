const { bookProvider } = require('../providers');

const createBook = async (book) => { 
    return await bookProvider.createBook(book);
};

const getBook = async (bookId) => {
    return await bookProvider.getBook(bookId);
};

const getAllBooks = async() => {
    return await bookProvider.getAllBooks();
};

const updateBook = async(bookId, bookUpd) => {
    const book = await bookProvider.getBook(bookId);
    if(book) {
        const updatedBook = await bookProvider.updateBook(bookId, bookUpd);
        return updatedBook;
    }
    return null;
}

const deleteBook = async(bookId) => {
    const book = await bookProvider.getBook(bookId);
    if(book) {
        const bookToDelete = await bookProvider.deleteBook(bookId);
        return bookToDelete;
    }
    return null;
}

module.exports = {createBook, getBook, getAllBooks, createBook, updateBook, deleteBook};
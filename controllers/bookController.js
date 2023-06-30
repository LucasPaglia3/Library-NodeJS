const { bookService } = require('../services');

const getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    if(!books) {
        res.status(404).json({ action: 'getAllBooks', error: 'No books found!'});
    } else {
        res.json(books);
    }   
};

const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookid);
        if(!book) {
            res.status(404).json({ action: 'getBook', error: 'Book does not exist!'});
        } else {
            res.json(book);
        }
    } catch(error) {
        res.status(500).json({ action: 'getBook', error: error.message });
    }
};

const createBook = async (req, res) => {
    try {
        const newBook = bookService.createBook(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ action: 'createBook', error: error.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = bookService.updateBook(req.params.bookid, req.body);
        if(!book) {
            res.status(404).json({ action: 'updateBook', error: 'Book does not exist!'});
        } else {
            res.json(book);
        }
    } catch(error) {
        res.status(500).json({ action: 'updateBook', error: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = bookService.deleteBook(req.params.bookid);
        if(!book) {
            res.status(404).json({ action: 'deleteBook', error: 'deleteBook does not exist!'});
        } else {
            res.json(book);
        }
    } catch( error ){
        res.status(500).json({ action: 'deleteBook', error: error.message });
    }
}

module.exports = { getBook, getAllBooks, createBook, updateBook, deleteBook };
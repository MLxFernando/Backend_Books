const Book = require('../models/book.model');
const express = require('express');
const router = express.Router();


//CREATE a new book
const createBook = router.post('/' ,async (req, res) => {
    const {title, dateOfPublication, autor, languageNative, category } = req.body;
    const book = new Book({title, dateOfPublication, autor, languageNative, category });
    await book.save();
    res.json({status: 'Book Created'});
});

//RETRIEVE Book
const retrieveBook= router.get('/:id',async (req, res) => {
    const books = await Book.findById(req.params.id);
    res.json(books);
});

// UPDATE a books
const updateBook = router.put('/:id',async (req, res) => {
    const { title, dateOfPublication, autor, languageNative, category  } = req.body;
    const newBook = {title, dateOfPublication, autor, languageNative, category };
    await Book.findByIdAndUpdate(req.params.id, newBook);
    res.json({status: 'Book Updated'});
});
    
//DELETE a book
const deleteBook = router.delete('/:id',async (req, res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.json({status: 'Book Deleted'});
});
  


//LIST all Books
const listBooks = router.get('/' ,async (req, res) => {
  const books = await Book.find()
  res.json(books);
});


module.exports = createBook;
module.exports = retrieveBook;
module.exports = updateBook;
module.exports = deleteBook;
module.exports = listBooks;
module.exports= router;


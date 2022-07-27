const express = require('express');
const { createBook, deleteBook, listBooks, retrieveBook, updateBook }= require ('../controller/book.controller');


const router = (app = Application) =>{        
    app.post('/books/create', createBook);   
    app.get('/books/:id', retrieveBook);
    app.put('/books/:id',updateBook);
    app.delete('/books/:id',deleteBook)
    app.get('/books', listBooks);  
}

module.exports= router;



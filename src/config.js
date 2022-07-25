require('dotenv').config()

const MONGODB_URL= process.env.MONGODB_URL || "mongodb://localhost/BooksDB";
module.exports = MONGODB_URL;

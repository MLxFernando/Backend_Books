
const mongoose= require('mongoose');
const  MONGODB_URL= require('./config');

mongoose.connect(MONGODB_URL)
.then(console.log ("DATABASE STARTED "))
.catch(error => console.error(error));




module.exports= mongoose;



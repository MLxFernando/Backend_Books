const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const path = require('path');


const main = async()=> {
  await mongoose;
  const server = express();
  server.use(express.json());
  server.set('port', process.env.PORT || 3000);
  //start server books
  server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`)
  })

  // Middlewares
  server.use(morgan('dev'))
  server.use(express.json())

  server.use('/books', require('./controller/book.controller'));
  
  // Static Files
  server.use(express.static(path.join(__dirname, 'public')));;

}    

main();






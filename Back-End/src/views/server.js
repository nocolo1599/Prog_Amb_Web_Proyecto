const path = require('path');
var express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();

//connect to db
mongoose.connect('mongodb://localhost/crud')
    .then(db => console.log('DB connected'))
    .catch (err => console.log(err));
    
//import route
const indexRoutes = requiere('.Routes/index');



//settings
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.set('views engine', 'ejs');

//middleware
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));  

//routes
server.use('/', indexRoutes);

//Starting Server
server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')} `);
    });
    

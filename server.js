    var express = require('express');
    var app = express();
    var port =4000;
    var bodyParser = require('body-parser');
    var cors = require('cors');
    var mongoose = require('mongoose');
    var Producto = require('./models/ProductoModels');

    //mongoose instance conection 
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:s3cr3t@localhost:27017/productos_db?authSource=admin');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(cors());
    var routesProductos = require('./routes/productoRoutes');
    routesProductos(app);

    app.listen(port);
    console.log('Restfull API server runing: ' + port);
 
    var express = require('express');
    var app = express();
    var port = 3000;
    var bodyParser = require ('body-parser');
    var cors = require('cors');
    var mongoose = require ('mongoose');
    var Producto = require('../Prog_Amb_Web_Proyecto/Back-End/models/ProductoModels');
    const Cliente = require('../Prog_Amb_Web_Proyecto/Back-End/models/clienteModels');

    //mongoose instance conection 
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/TIENDA').then()
    require('./productos.model');
    
    const routesClientes = require('./routes/clientesRoutes');
    routesClientes(app)

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.use(cors());
    var ProductosRoutes = require('./Back-End/routes/ProductosRoutes');
    ProductosRoutes(app);

    app.listen(port);
    console.log('Restful API server runing: ' + port);
 
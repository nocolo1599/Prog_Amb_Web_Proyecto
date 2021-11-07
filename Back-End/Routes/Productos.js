'use strict';

var cors = require('cors');
const express = require('express')
const router = express.Router()

const Productos = require('../Controllers/ProductoController.js')

module.exports = function(app) {
    var Productos = require('../Controllers/ProductoController.js')

    app.route('/Productos')
    .get(Productos.table)
    .post(Productos.create);

    app.route('/Productos/:id')
    /*.get(Productos.search)*/
   .get(Productos.table)
    .put(Productos.update)
    .delete(Productos.delete);

}

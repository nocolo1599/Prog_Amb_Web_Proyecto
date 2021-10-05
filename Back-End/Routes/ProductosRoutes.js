'use strict';

var cors = require('cors');

module.exports = function(app) {
    var Productos = require('../Controllers/ProductoController.js')

    app.route('/Productos')
    .get(Productos.list)
    .post(Productos.create);

    app.route('/Productos/:id')
    /*.get(Productos.search)*/
    .get(Productos.list)
    .put(Productos.update)
    .delete(Productos.delete);

}


'use strict';

var cors = require('cors');

module.exports = function(app) {
    var Productos = require('../Controllers/ProductoController.js')

    app.route('/productos')
    .get(Productos.list)
    .post(Productos.create_new);

    app.route('/productos/:producto_id')
    .get(Productos.search)
    .put(Productos.update)
    .delete(Productos.delete);

}


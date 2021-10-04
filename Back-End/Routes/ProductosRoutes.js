'use strict';

var cors = require('cors');

module.exports = function(app) {
    var cProductos = require('../Controllers/Productocontroller.js')

    app.route('/productos')
    .get(cProductos.list)
    .post(cProductos.create_new);

    app.route('/productos/:producto_id')
    .get(cProductos.search)
    .put(cProductos.update)
    .delete(cProductos.delete);

}
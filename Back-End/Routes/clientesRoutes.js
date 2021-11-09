'use strict'

const cors = require('cors')

module.exports = function (app) {
    const cClientes = require('../controllers/clienteController')


    app.route('/Clientes')
        .get(cClientes.list)
        .post(cClientes.create)

    app.route('/Clientes/:id')
        .put(cClientes.update)
        .delete(cClientes.delete)

}
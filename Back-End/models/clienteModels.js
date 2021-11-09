'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({
    cedulaC: {
        type: Number,
        required: 'La cedula es obligatoria'
    },
    nombreC: {
        type: String,
        required: 'El nombre es obligatorio'
    },
    apellidosC: {
        type: String,
        required: 'Los apellidos es obligatorio'
    },
    celular: {
        type: Number,
        required: 'El celular es obligatorio'
    },
    ciudad: {
        type: String,
        required: 'La ciudad es obligatoria'
    }
})

module.exports = mongoose.model('Clientes', ClienteSchema)
'use strict';

var mongose = require('mongoose');
var Schema = mongoose.Schema;

let ProductoSchema = new Schema({
    nombre:{
        type: String,
        required: "Se requiere el nombre del producto"
    },

    cantidad:{
        type: Number,
        required: "Se requiere la cantidad por unidad del producto"
    },

    peso:{
        type: Number,
        required: "Se requiere un peso por unidad del producto"
    },
    
    fecha_caducidad:{
        type: Date,
        required: "Se requiere la fecha de caducidad del producto"
    },

    valor:{
        type: Number,
        required: "la valor del producto es obligatorio"
    }

});

module.exports = mongoose.model('Producto', ProductoSchema );

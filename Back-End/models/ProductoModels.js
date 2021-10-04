'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    Codigo:{
        type: Number,
        required: "Se requiere el codigo del producto es obligatorio"
    },

    nombre:{
        type: String,
        required: "Se requiere el nombre del producto es obligatorio"
    },

    cantidad:{
        type: Number,
        required: "Se requiere la cantidad por unidad del producto es obligatorio"
    },

    peso:{
        type: Number,
        required: "Se requiere un peso por unidad del producto es obligatorio"
    },
    
    fecha_caducidad:{
        type: Date,
        required: "Se requiere la fecha de caducidad del producto es obligatorio"
    },

    valor:{
        type: Number,
        required: "la valor del producto es obligatorio"
    }

});

module.exports = mongoose.model('Producto', ProductoSchema );

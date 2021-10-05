'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    Nombre_Producto:{
        type: String,
        required: 'Se requiere el nombre del producto es obligatoria'
    },

    Cantidad_Unidad:{
        type: Number,
        required: 'Se requiere la cantidad por unidad del producto es obligatori'
    },

    Peso:{
        type: Number,
        required: 'Se requiere un peso por unidad del producto es obligatorio'
    },
    
    Fecha_Caducidad:{
        type: Date,
        required: 'Se requiere la fecha de caducidad del producto es obligatorio'
    },

    Valor:{
        type: Number,
        required: 'la valor del producto es obligatorio'
    }

});

module.exports = mongoose.model('Productos', ProductoSchema );

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    Articulo:{
        type: String,
        required: 'Se requiere el nombre del producto es obligatoria'
    },

    Cantidad_Unidad:{
        type: Number,
        required: 'Se requiere la cantidad por unidad del producto es obligatorio'
    },

    Valor_Articulo:{
        type: Number,
    },
    
    Subtotal:{
        type: Number
    },

    Total:{
        type: Number
    }

});

module.exports = mongoose.model('Articulos', ArticuloSchema );

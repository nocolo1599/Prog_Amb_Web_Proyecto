'use strict';

var mongoose = require('mongoose');
var Productos = mongoose.model('Productos');


router.get('/', (req, res) => {
    res.render("productos/table")
});
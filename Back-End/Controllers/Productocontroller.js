'use strict';

var mongoose = require('mongoose');
var Producto = mongoose.model('Producto');


exports.list = function(req, res) {
    Producto.find({}, function(err,productos){
         if (err)
                res.send(err);
            res.json(productos);
     });
    };

    exports.search = function (req, res) {
        Producto.findById(req.params.prod_id, function (err, producto) {
          if (err)
            res.send(err);
          res.json(producto);
        });
      };

exports.create_new = function(req, res) {
    var new_producto = new Producto(req.body);
    new_producto.save(function(err,producto) {
        if (err)
            res.send(err);
        res.json(producto);
    });

};

exports.update = function(req, res) {
    Producto.findOneAndUpdate({ _id: req.params.productos_id }, 
                            req.body, 
                            { new: false},function(err, producto){
    if (err)
        res.send(err);
    res.json(producto);
    });

};

exports.delete = function(req, res) {
    Producto.remove({ _id: req.params.productos_id}, function (err, productos){
        if (err)
            res.send(err);
        else
            res.json({message:'Producto eliminado' });
    
        });

};

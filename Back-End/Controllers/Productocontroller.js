'use strict';

var mongoose = require('mongoose');
var Productos = mongoose.model('Productos');


exports.table = function(req, res) {
    Productos.find({}, function(err,productos){
         if (err)
                res.send(err);
            res.json(productos);
     });
    };

    exports.search = function (req, res) {
        Productos.findById(req.params.prod_id, function (err, productos) {
          if (err)
            res.send(err);
          res.json(productos);
        });
      };

      exports.create = function(req, res) {
        var new_producto = new Productos(req.body);
        new_producto.save(function(err,productos) {
            if (err)
                res.send(err);
            res.json(productos);
        });
    
    };
    
exports.update = function(req, res) {
    Productos.findOneAndUpdate({ _id: req.params.id }, 
                            req.body, 
                            { new: false},function(err, productos){
    if (err)
        res.send(err);
    res.json(productos);
    });

};

exports.delete = function(req, res) {
    Productos.remove({ _id: req.params.productos_id}, function (err, productos){
        if (err)
            res.send(err);
        else
            res.json({message:'Producto eliminado' });
    
        });

};

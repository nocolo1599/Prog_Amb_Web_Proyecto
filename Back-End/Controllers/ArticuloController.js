'use strict';

var mongoose = require('mongoose');
var Articulos = mongoose.model('Articulos');


exports.table = function(req, res) {
    Articulo.find({}, function(err,articulos){
         if (err)
                res.send(err);
            res.json(articulos);
     });
    };

    

     
    
exports.update = function(req, res) {
    Articulos.findOneAndUpdate({ _id: req.params.id }, 
                            req.body, 
                            { new: false},function(err, articulos){
    if (err)
        res.send(err);
    res.json(articulos);
    });

};

exports.delete = function(req, res) {
    Articulos.remove({ _id: req.params.productos_id}, function (err, articulos){
        if (err)
            res.send(err);
        else
            res.json({message:'Articulo eliminado' });
    
        });

};

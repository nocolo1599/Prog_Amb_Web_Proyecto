'use strict'

var mongoose = require('mongoose')
var Clientes = mongoose.model('Clientes')

exports.list = function (req, res) {
    Clientes.find({}, function (err, clientes){
        if (err){
            res.send(err)
        } else {
            res.json(clientes)
        }

    })
}


exports.create = function (req, res){
    var new_cliente = new Clientes(req.body)
    new_cliente.save(function (err, clientes) {
        if (err) {
            res.send(err)
        } else {
            res.json(clientes)
        }
    })
}


exports.update = function (req, res){
    Clientes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: false }, function (err, clientes){
        if (err){
            res.send(err)
        } else {
            res.json(clientes)
        }
    })
}


exports.delete = function (req, res){
    Clientes.remove({ _id: req.params.id }, function (err,clientes){
        if (err){
            res.send(err)
        } else {
            res.json({ message: 'Cliente eliminado' })
        }
    })
}
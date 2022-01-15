const express = require('express');

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router();

//routes
router.get('/',list)
router.get('/:id', get)
router.post('/', insertar)
router.delete('/:id', eliminar)


//functions
function list(req,res,next){
    controller.list()
        .then(data =>{
            response.success(req,res,data,200);
        })
        .catch(next)
}

function get(req, res, next){
    controller.get(req.params.id)
        .then((data)=>{
            response.success(req, res, data, 201)
        })
        .catch(next)
}

function insertar(req, res, next){
    controller.upsert(req.body)
    .then((data)=>{
        response.success(req,res, data, 201)
    })
    .catch(next)
}

function eliminar(req, res, next){
    controller.eliminar(req.params.id)
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch(next)
}





module.exports = router
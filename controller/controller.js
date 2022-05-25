const {Alimento} = require('../models/model');
const req= require('express/lib/request');
const {check, validationResult, body} = require("express-validator");
//const {validar} = require('../middleware/validation');

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
};

const vistaUnAlimento= async (req, res) =>{
    try {
        const alimento =await Alimento.findById(req.params.id)
        res.json({alimento})
    }catch (error) {
        res.status(400).json({msg:"No existe el Alimento",error})
    }
};

const vistaAlimentos = async (req, res) =>{
    const alimentos = await Alimento.find()
    res.json({alimentos})
};

const crearAlimento = async (req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()){
            const food = new Alimento(req.body);
            await food.save()
            res.status(201).json ({msg: "Alimento cargado",food})
        }else{
            res.status(501).json(error)
        }
    }catch(err){
        res.status(501).json({msg: "Alimento No Cargado..."},err)
    }
};

const editarAlimento= async (req, res) =>{
    const{id} = req.params
    
    try{
        let alimento = await Alimento.findByIdAndUpdate(id, req.body)
        if (alimento === null){res.json({msg:"No se edito correctamente"})}

        res.status(202).json({msg:"Se edito el Alimento correctamente", valores})
    }catch (error) {
        res.status(501).json({msg:"No se edito el Alimento",error})
    }
};

const eliminarAlimento = async (req, res) =>{
    try{
        const alimento = await Alimento.findByIdAndDelete(req.params.id)
        if (alimento=== null) {res.json({msg:"No se logro eliminar el Alimento"})}

        res.json({msg:"Elimino el Alimento", alimento})

    }catch (error) {
        res.status(400).json({msg:"No se logro eliminar el Alimento", error})
    }
};

module.exports = {vistaUno, vistaUnAlimento, vistaAlimentos, crearAlimento, editarAlimento, eliminarAlimento}

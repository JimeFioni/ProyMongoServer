const {Alimento}= require('../models/model');

const validarId = async (req, res, next) =>{
    const id = await Alimento.findById(req.params.id)
        if (id !== null) {
            next();
        } else {
            res.status(501).json ({msg: "Su Id no es valido", error})
        }
};

module.exports = {validarId}
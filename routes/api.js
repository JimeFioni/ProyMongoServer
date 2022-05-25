const express = require('express');
const router = express.Router(); 
const {vistaUno, vistaUnAlimento, vistaAlimentos, crearAlimento, editarAlimento, eliminarAlimento} = require('../controller/controller.js');
const {check, validationResult, body} = require('express-validator');
const {validarId} = require('../middleware/validation');


/* GET users listing. */
router.get('/ver', vistaAlimentos);
router.post("/crear"[
    check("name").not().isEmpty ().withMessage("Debe ingresar el nombre del Alimento"),
    check("breed").not().isEmpty().withMessage("Debe ingresar la raza de la mascota"),
    check("packaging").not().isEmpty ().withMessage("Debe ingresar la cantidad de Kg. del envase")
], crearAlimento);

router.get("/ver/:id", validarId, vistaUnAlimento);
router.put("/editar/:id",validarId, editarAlimento);
router.delete("/eliminar/:id", validarId, eliminarAlimento);


module.exports = router;

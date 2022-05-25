const express = require('express');
const router = express.Router(); 
const {vistaUno, vistaUnAlimento, vistaAlimentos, crearAlimento, editarAlimento, eliminarAlimento} = require('../controller/controller.js');
const {check, validationResult, body} = require('express-validator');
//const {validarId} = require('../middleware/validation');


/* rutas */
router.get('/ver', vistaAlimentos);
router.post('/crear', check("name").not().isEmpty().withMessage("Debe ingresar el nombre del Alimento"), crearAlimento);

router.get("/ver/:id", vistaUnAlimento);
router.put("/editar/:id", editarAlimento);
router.delete("/eliminar/:id", eliminarAlimento);


module.exports = router;

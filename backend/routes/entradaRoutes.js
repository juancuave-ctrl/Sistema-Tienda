const express = require("express");

const router = express.Router();

const entradaController = require("../controllers/entradaController");



// Obtener entradas

router.get(
    "/",
    entradaController.obtenerEntradas
);



// Registrar entrada

router.post(
    "/",
    entradaController.crearEntrada
);



module.exports = router;
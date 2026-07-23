const express = require("express");

const router = express.Router();

const reporteController = require("../controllers/reporteController");


// Obtener todos los reportes

router.get(
    "/",
    reporteController.obtenerReportes
);


// Buscar por fechas

router.get(
    "/buscar",
    reporteController.buscarPorFechas
);


module.exports = router;
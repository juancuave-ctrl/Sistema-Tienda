const express = require("express");

const router = express.Router();

const exportarController = require("../controllers/exportarController");



// Generar PDF

router.get(
    "/pdf",
    exportarController.exportarPDF
);



// Generar Excel

router.get(
    "/excel",
    exportarController.exportarExcel
);



module.exports = router;
const express = require("express");
const router = express.Router();

const ventaController = require("../controllers/ventaController");

// Obtener todas las ventas
router.get("/", ventaController.obtenerVentas);

// Obtener una venta por ID
router.get("/:id", ventaController.obtenerVentaPorId);

// Registrar una venta
router.post("/", ventaController.crearVenta);

module.exports = router;
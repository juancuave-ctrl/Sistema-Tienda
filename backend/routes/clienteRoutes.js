const express = require("express");

const router = express.Router();

const clienteController = require("../controllers/clienteController");

// Obtener clientes
router.get("/", clienteController.obtenerClientes);

// Crear cliente
router.post("/", clienteController.crearCliente);

module.exports = router;
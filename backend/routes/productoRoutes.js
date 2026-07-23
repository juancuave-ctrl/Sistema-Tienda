const express = require("express");

const router = express.Router();

const productoController = require("../controllers/productoController");


// Obtener productos
router.get("/", productoController.obtenerProductos);


// Crear producto
router.post("/", productoController.crearProducto);


// Eliminar producto
router.delete("/:id", productoController.eliminarProducto);


// Actualizar producto
router.put("/:id", productoController.actualizarProducto);


module.exports = router;
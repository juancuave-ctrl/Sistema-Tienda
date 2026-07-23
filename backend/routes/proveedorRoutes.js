const express = require("express");

const router = express.Router();

const proveedorController = require("../controllers/proveedorController");


// Obtener proveedores
router.get("/", proveedorController.obtenerProveedores);


// Crear proveedor
router.post("/", proveedorController.crearProveedor);


// Eliminar proveedor
router.delete("/:id", proveedorController.eliminarProveedor);


// Actualizar proveedor
router.put("/:id", proveedorController.actualizarProveedor);


module.exports = router;
const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

// Obtener usuarios
router.get("/", usuarioController.obtenerUsuarios);

// Crear usuario
router.post("/", usuarioController.crearUsuario);

// Eliminar usuario
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;
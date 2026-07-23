const express = require("express");

const router = express.Router();


const usuarioController = require("../controllers/usuarioController");




// Obtener usuarios

router.get(

    "/",

    usuarioController.obtenerUsuarios

);







// Crear usuario

router.post(

    "/",

    usuarioController.crearUsuario

);







// Actualizar usuario

router.put(

    "/:id",

    usuarioController.actualizarUsuario

);







// Eliminar usuario

router.delete(

    "/:id",

    usuarioController.eliminarUsuario

);





module.exports = router;
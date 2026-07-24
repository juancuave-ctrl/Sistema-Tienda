const express = require("express");

const router = express.Router();


const usuarioController = require("../controllers/usuarioController");

const verificarToken = require("../middleware/authMiddleware");
const verificarRol = require("../middleware/rolMiddleware");





// Obtener usuarios

router.get(

    "/",

    verificarToken,

    usuarioController.obtenerUsuarios

);




// Crear usuario

router.post(

    "/",

    verificarToken,

    usuarioController.crearUsuario

);




// Actualizar usuario

router.put(

    "/:id",

    verificarToken,

    usuarioController.actualizarUsuario

);




// Eliminar usuario

router.delete(

    "/:id",

    verificarToken,

    usuarioController.eliminarUsuario

);




module.exports = router;



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
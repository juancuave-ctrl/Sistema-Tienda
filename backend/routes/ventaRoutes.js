const express = require("express");

const router = express.Router();


const ventaController = require("../controllers/ventaController");


const verificarToken = require("../middleware/authMiddleware");





router.get(

"/",

verificarToken,

ventaController.obtenerVentas

);





router.post(

"/",

verificarToken,

ventaController.crearVenta

);





module.exports = router;
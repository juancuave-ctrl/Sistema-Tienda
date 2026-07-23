const express = require("express");

const router = express.Router();


const loginController = require("../controllers/loginController");



// Ruta de inicio de sesión

router.post(
    "/",
    loginController.login
);



module.exports = router;
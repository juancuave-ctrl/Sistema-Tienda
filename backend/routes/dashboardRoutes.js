const express = require("express");

const router = express.Router();


const dashboardController = require("../controllers/dashboardController");



// Obtener información del dashboard

router.get(
    "/",
    dashboardController.obtenerDashboard
);



module.exports = router;
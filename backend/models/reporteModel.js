const conexion = require("../config/db");

// Obtener todas las ventas
const obtenerReportes = (callback) => {

    conexion.query(

        "SELECT * FROM ventas ORDER BY fecha DESC, id DESC",

        callback

    );

};

// Buscar ventas por rango de fechas
const buscarPorFechas = (desde, hasta, callback) => {

    conexion.query(

        `SELECT *
         FROM ventas
         WHERE DATE(fecha) BETWEEN ? AND ?
         ORDER BY fecha DESC, id DESC`,

        [desde, hasta],

        callback

    );

};

module.exports = {

    obtenerReportes,

    buscarPorFechas

};
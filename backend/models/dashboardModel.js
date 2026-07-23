const conexion = require("../config/db");

// Total de productos registrados
const totalProductos = (callback) => {

    conexion.query(
        "SELECT COUNT(*) AS total FROM productos",
        callback
    );

};

// Total de unidades disponibles
const totalInventario = (callback) => {

    conexion.query(
        "SELECT SUM(cantidad) AS total FROM productos",
        callback
    );

};

// Total ventas realizadas
const totalVentas = (callback) => {

    conexion.query(
        "SELECT COUNT(*) AS total FROM ventas",
        callback
    );

};

// Dinero total vendido
const ingresosTotales = (callback) => {

    conexion.query(
        "SELECT SUM(total) AS total FROM ventas",
        callback
    );

};

// Productos con poco stock
const productosBajos = (callback) => {

    conexion.query(
        "SELECT * FROM productos WHERE cantidad <= 5",
        callback
    );

};

// Ventas por producto
const ventasPorProducto = (callback) => {

    conexion.query(

        `SELECT
            producto,
            COUNT(*) AS cantidad
        FROM ventas
        GROUP BY producto
        ORDER BY cantidad DESC`,

        callback

    );

};

module.exports = {

    totalProductos,

    totalInventario,

    totalVentas,

    ingresosTotales,

    productosBajos,

    ventasPorProducto

};
const conexion = require("../config/db");

// Obtener clientes
const obtenerClientes = (callback) => {

    conexion.query(
        "SELECT * FROM clientes",
        callback
    );

};

// Crear cliente
const crearCliente = (cliente, callback) => {

    conexion.query(
        "INSERT INTO clientes(nombre, telefono, correo) VALUES(?,?,?)",
        [cliente.nombre, cliente.telefono, cliente.correo],
        callback
    );

};

module.exports = {
    obtenerClientes,
    crearCliente
};
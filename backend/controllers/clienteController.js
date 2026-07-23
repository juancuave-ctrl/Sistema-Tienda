const clienteModel = require("../models/clienteModel");

// Obtener clientes
exports.obtenerClientes = (req, res) => {

    clienteModel.obtenerClientes((error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);

    });

};

// Crear cliente
exports.crearCliente = (req, res) => {

    clienteModel.crearCliente(req.body, (error) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json({
            mensaje: "Cliente creado correctamente"
        });

    });

};
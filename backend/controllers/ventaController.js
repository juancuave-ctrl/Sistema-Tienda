const ventaModel = require("../models/ventaModel");


// Obtener todas las ventas

exports.obtenerVentas = (req, res) => {

    ventaModel.obtenerVentas((error, resultados) => {

        if (error) {

            return res.status(500).json(error);

        }

        res.json(resultados);

    });

};




// Obtener una venta por ID

exports.obtenerVentaPorId = (req, res) => {

    ventaModel.obtenerVentaPorId(

        req.params.id,

        (error, resultados) => {

            if (error) {

                return res.status(500).json(error);

            }

            if (resultados.length === 0) {

                return res.status(404).json({

                    mensaje: "Venta no encontrada"

                });

            }

            res.json(resultados[0]);

        }

    );

};




// Crear venta

exports.crearVenta = (req, res) => {

    console.log("VENTA RECIBIDA:", req.body);

    ventaModel.crearVenta(req.body, (error, resultado) => {

        if (error) {

            return res.status(500).json({

                mensaje: error

            });

        }

        res.json({

            mensaje: "Venta registrada correctamente",

            venta: resultado

        });

    });

};
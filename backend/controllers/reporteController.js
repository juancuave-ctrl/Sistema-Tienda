const reporteModel = require("../models/reporteModel");

// Obtener todas las ventas
exports.obtenerReportes = (req, res) => {

    reporteModel.obtenerReportes((error, resultados) => {

        if (error) {

            return res.status(500).json(error);

        }

        res.json(resultados);

    });

};

// Buscar ventas por fechas
exports.buscarPorFechas = (req, res) => {

    const { desde, hasta } = req.query;

    reporteModel.buscarPorFechas(

        desde,

        hasta,

        (error, resultados) => {

            if (error) {

                return res.status(500).json(error);

            }

            res.json(resultados);

        }

    );

};
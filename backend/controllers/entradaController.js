const entradaModel = require("../models/entradaModel");



// Obtener entradas

exports.obtenerEntradas = (req, res) => {


    entradaModel.obtenerEntradas((error, resultados) => {


        if(error){

            return res.status(500).json(error);

        }


        res.json(resultados);


    });


};






// Crear entrada

exports.crearEntrada = (req, res) => {


    entradaModel.crearEntrada(req.body, (error) => {



        if(error){


            return res.status(500).json(error);


        }




        res.json({

            mensaje: "Entrada de inventario registrada correctamente"

        });



    });



};
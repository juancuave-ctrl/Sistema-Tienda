const productoModel = require("../models/productoModel");


// Obtener productos
exports.obtenerProductos = (req, res) => {


    productoModel.obtenerProductos((error, resultados) => {


        if (error) {

            return res.status(500).json(error);

        }


        res.json(resultados);


    });


};




// Crear producto
exports.crearProducto = (req, res) => {


    productoModel.crearProducto(req.body, (error) => {


        if (error) {

            return res.status(500).json(error);

        }


        res.json({

            mensaje: "Producto creado correctamente"

        });


    });


};





// Eliminar producto
exports.eliminarProducto = (req, res) => {


    productoModel.eliminarProducto(req.params.id, (error) => {


        if (error) {

            return res.status(500).json(error);

        }


        res.json({

            mensaje: "Producto eliminado correctamente"

        });


    });


};







// Actualizar producto
exports.actualizarProducto = (req, res) => {


    productoModel.actualizarProducto(

        req.params.id,

        req.body,

        (error) => {


            if (error) {


                return res.status(500).json(error);


            }



            res.json({

                mensaje: "Producto actualizado correctamente"

            });


        }


    );


};
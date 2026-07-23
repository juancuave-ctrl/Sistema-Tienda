const proveedorModel = require("../models/proveedorModel");


// Obtener proveedores
exports.obtenerProveedores = (req, res) => {

    proveedorModel.obtenerProveedores((error, resultados) => {

        if (error) {

            return res.status(500).json(error);

        }

        res.json(resultados);

    });

};



// Crear proveedor
exports.crearProveedor = (req, res) => {


    proveedorModel.crearProveedor(req.body, (error) => {


        if (error) {

            return res.status(500).json(error);

        }


        res.json({

            mensaje: "Proveedor creado correctamente"

        });


    });


};




// Eliminar proveedor
exports.eliminarProveedor = (req, res) => {


    proveedorModel.eliminarProveedor(req.params.id, (error) => {


        if (error) {

            return res.status(500).json(error);

        }


        res.json({

            mensaje: "Proveedor eliminado correctamente"

        });


    });


};




// Actualizar proveedor
exports.actualizarProveedor = (req, res) => {


    proveedorModel.actualizarProveedor(
        req.params.id,
        req.body,
        (error) => {


            if (error) {

                return res.status(500).json(error);

            }


            res.json({

                mensaje: "Proveedor actualizado correctamente"

            });


        }
    );


};
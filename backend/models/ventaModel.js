const conexion = require("../config/db");


// Obtener todas las ventas

const obtenerVentas = (callback) => {

    conexion.query(

        "SELECT * FROM ventas ORDER BY id DESC",

        callback

    );

};




// Obtener una venta por ID

const obtenerVentaPorId = (id, callback) => {

    conexion.query(

        "SELECT * FROM ventas WHERE id = ?",

        [id],

        callback

    );

};




// Crear venta y actualizar inventario

const crearVenta = (venta, callback) => {

    const {

        cliente,

        producto,

        cantidad,

        total

    } = venta;

    console.log("DATOS DE VENTA:", venta);

    // Buscar producto

    conexion.query(

        "SELECT cantidad FROM productos WHERE LOWER(nombre)=LOWER(?)",

        [producto],

        (error, resultado) => {

            if (error) {

                return callback(error);

            }

            if (resultado.length === 0) {

                return callback("Producto no encontrado");

            }

            const stockActual = resultado[0].cantidad;

            console.log("STOCK ACTUAL:", stockActual);

            if (stockActual < cantidad) {

                return callback("No hay suficiente inventario");

            }

            // Descontar inventario

            conexion.query(

                "UPDATE productos SET cantidad = cantidad - ? WHERE LOWER(nombre)=LOWER(?)",

                [

                    cantidad,

                    producto

                ],

                (error) => {

                    if (error) {

                        return callback(error);

                    }

                    // Guardar venta

                    conexion.query(

                        `INSERT INTO ventas
                        (cliente, producto, cantidad, total)
                        VALUES(?,?,?,?)`,

                        [

                            cliente,

                            producto,

                            cantidad,

                            total

                        ],

                        (error, resultado) => {

                            if (error) {

                                return callback(error);

                            }

                            callback(null, {

                                idVenta: resultado.insertId,

                                cliente,

                                producto,

                                cantidad,

                                total

                            });

                        }

                    );

                }

            );

        }

    );

};




module.exports = {

    obtenerVentas,

    obtenerVentaPorId,

    crearVenta

};
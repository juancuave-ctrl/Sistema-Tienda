const conexion = require("../config/db");


// Obtener entradas
const obtenerEntradas = (callback) => {

    conexion.query(
        "SELECT * FROM entradas_inventario ORDER BY id DESC",
        callback
    );

};





// Crear entrada y aumentar inventario

const crearEntrada = (entrada, callback) => {


    const {
        producto,
        cantidad,
        proveedor
    } = entrada;



    // Aumentar inventario

    conexion.query(

        "UPDATE productos SET cantidad = cantidad + ? WHERE nombre = ?",


        [
            cantidad,
            producto
        ],


        (error)=>{


            if(error){

                return callback(error);

            }



            // Guardar entrada


            conexion.query(

                "INSERT INTO entradas_inventario(producto,cantidad,proveedor) VALUES(?,?,?)",


                [
                    producto,
                    cantidad,
                    proveedor
                ],


                callback

            );



        }



    );



};






module.exports = {


    obtenerEntradas,

    crearEntrada


};
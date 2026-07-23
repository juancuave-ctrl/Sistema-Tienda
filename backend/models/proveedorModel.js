const conexion = require("../config/db");


// Obtener proveedores
const obtenerProveedores = (callback) => {


    conexion.query(

        "SELECT * FROM proveedores",

        callback

    );


};




// Crear proveedor
const crearProveedor = (datos, callback) => {


    conexion.query(


        "INSERT INTO proveedores(nombre, telefono, correo) VALUES(?,?,?)",


        [

            datos.nombre,

            datos.telefono,

            datos.correo

        ],


        callback


    );


};





// Eliminar proveedor
const eliminarProveedor = (id, callback) => {


    conexion.query(


        "DELETE FROM proveedores WHERE id = ?",


        [id],


        callback


    );


};






// Actualizar proveedor
const actualizarProveedor = (id, datos, callback) => {


    conexion.query(


        "UPDATE proveedores SET nombre = ?, telefono = ?, correo = ? WHERE id = ?",


        [

            datos.nombre,

            datos.telefono,

            datos.correo,

            id

        ],


        callback


    );


};





module.exports = {


    obtenerProveedores,

    crearProveedor,

    eliminarProveedor,

    actualizarProveedor


};
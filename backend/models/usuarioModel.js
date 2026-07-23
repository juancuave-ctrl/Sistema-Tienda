const conexion = require("../config/db");




// Obtener usuarios

const obtenerUsuarios = (callback) => {


    conexion.query(

        "SELECT * FROM usuarios",

        callback

    );


};








// Crear usuario

const crearUsuario = (datos, callback) => {


    conexion.query(

        "INSERT INTO usuarios(nombre, correo, password, rol) VALUES(?,?,?,?)",

        [

            datos.nombre,

            datos.correo,

            datos.password,

            datos.rol

        ],

        callback

    );


};








// Actualizar usuario

const actualizarUsuario = (id, datos, callback) => {


    conexion.query(


        "UPDATE usuarios SET nombre=?, correo=?, password=?, rol=? WHERE id=?",



        [

            datos.nombre,

            datos.correo,

            datos.password,

            datos.rol,

            id

        ],



        callback


    );


};









// Eliminar usuario

const eliminarUsuario = (id, callback) => {


    conexion.query(


        "DELETE FROM usuarios WHERE id=?",


        [

            id

        ],


        callback


    );


};








module.exports = {


    obtenerUsuarios,

    crearUsuario,

    actualizarUsuario,

    eliminarUsuario


};
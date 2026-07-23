const conexion = require("../config/db");



// Buscar usuario por correo y contraseña

const loginUsuario = (correo, password, callback) => {


    conexion.query(

        "SELECT id, nombre, correo, rol FROM usuarios WHERE correo = ? AND password = ?",


        [
            correo,
            password
        ],


        callback

    );


};





module.exports = {

    loginUsuario

};
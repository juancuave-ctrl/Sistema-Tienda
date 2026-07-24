const conexion = require("../config/db");



const registrar = (datos, callback)=>{


    conexion.query(

        `
        INSERT INTO auditoria
        (
        usuario_id,
        accion,
        modulo,
        descripcion
        )
        VALUES(?,?,?,?)
        `,


        [

            datos.usuario_id,

            datos.accion,

            datos.modulo,

            datos.descripcion

        ],


        callback


    );


};



module.exports = {

    registrar

};
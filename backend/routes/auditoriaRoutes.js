const express = require("express");

const router = express.Router();


const conexion = require("../config/db");


const verificarToken = require("../middleware/authMiddleware");

const verificarRol = require("../middleware/rolMiddleware");




// Obtener auditoría

router.get(

"/",

verificarToken,

verificarRol(["Administrador"]),


(req,res)=>{


    conexion.query(

        `
        SELECT 
        auditoria.id,
        usuarios.nombre AS usuario,
        auditoria.accion,
        auditoria.modulo,
        auditoria.descripcion,
        auditoria.fecha

        FROM auditoria

        INNER JOIN usuarios

        ON auditoria.usuario_id = usuarios.id

        ORDER BY auditoria.fecha DESC
        `,


        (error,resultados)=>{


            if(error){

                return res.status(500).json(error);

            }


            res.json(resultados);


        }


    );


}


);



module.exports = router;
const auditoriaModel = require("../models/auditoriaModel");



exports.registrarAccion = (req,accion,modulo,descripcion)=>{


    auditoriaModel.registrar({

        usuario_id:req.usuario.id,

        accion,

        modulo,

        descripcion


    },
    
    (error)=>{


        if(error){

            console.log(
                "Error auditoria:",
                error
            );

        }


    });


};
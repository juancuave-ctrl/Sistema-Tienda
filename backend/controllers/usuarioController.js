const usuarioModel = require("../models/usuarioModel");




// Obtener usuarios

exports.obtenerUsuarios = (req, res) => {


    usuarioModel.obtenerUsuarios((error, resultados)=>{


        if(error){

            return res.status(500).json(error);

        }


        res.json(resultados);


    });


};







// Crear usuario

exports.crearUsuario = (req, res) => {


    usuarioModel.crearUsuario(
        req.body,

        (error)=>{


            if(error){

                return res.status(500).json(error);

            }



            res.json({

                mensaje:"Usuario creado correctamente"

            });



        }

    );


};








// Actualizar usuario

exports.actualizarUsuario = (req,res)=>{


    usuarioModel.actualizarUsuario(

        req.params.id,

        req.body,

        (error)=>{


            if(error){

                return res.status(500).json(error);

            }



            res.json({

                mensaje:"Usuario actualizado correctamente"

            });



        }


    );


};








// Eliminar usuario

exports.eliminarUsuario = (req,res)=>{


    usuarioModel.eliminarUsuario(

        req.params.id,

        (error)=>{


            if(error){

                return res.status(500).json(error);

            }



            res.json({

                mensaje:"Usuario eliminado correctamente"

            });



        }


    );


};
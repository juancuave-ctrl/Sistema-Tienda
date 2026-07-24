const usuarioModel = require("../models/usuarioModel");

const auditoriaController = require("./auditoriaController");

const bcrypt = require("bcrypt");





// ===============================
// Obtener usuarios
// ===============================

exports.obtenerUsuarios = (req, res) => {


    usuarioModel.obtenerUsuarios((error, resultados)=>{


        if(error){

            return res.status(500).json(error);

        }


        res.json(resultados);


    });


};








// ===============================
// Crear usuario
// ===============================

exports.crearUsuario = async (req, res) => {


    try {


        const usuario = req.body;



        usuario.password = await bcrypt.hash(

            usuario.password,

            10

        );





        usuarioModel.crearUsuario(

            usuario,

            (error)=>{


                if(error){

                    return res.status(500).json(error);

                }





                // Auditoría

                auditoriaController.registrarAccion(

                    req,

                    "CREAR",

                    "USUARIOS",

                    "Creó el usuario: " + usuario.nombre

                );






                res.json({

                    mensaje:"Usuario creado correctamente"

                });



            }


        );



    } catch(error){


        res.status(500).json(error);


    }


};









// ===============================
// Actualizar usuario
// ===============================

exports.actualizarUsuario = async (req,res)=>{


    try {


        const usuario = req.body;




        if(usuario.password){


            usuario.password = await bcrypt.hash(

                usuario.password,

                10

            );


        }






        usuarioModel.actualizarUsuario(


            req.params.id,


            usuario,


            (error)=>{


                if(error){

                    return res.status(500).json(error);

                }





                // Auditoría

                auditoriaController.registrarAccion(

                    req,

                    "ACTUALIZAR",

                    "USUARIOS",

                    "Actualizó usuario ID: " + req.params.id

                );






                res.json({

                    mensaje:"Usuario actualizado correctamente"

                });



            }


        );



    } catch(error){


        res.status(500).json(error);


    }


};









// ===============================
// Eliminar usuario
// ===============================

exports.eliminarUsuario = (req,res)=>{


    usuarioModel.eliminarUsuario(

        req.params.id,


        (error)=>{


            if(error){

                return res.status(500).json(error);

            }






            // Auditoría

            auditoriaController.registrarAccion(

                req,

                "ELIMINAR",

                "USUARIOS",

                "Eliminó usuario ID: " + req.params.id

            );







            res.json({

                mensaje:"Usuario eliminado correctamente"

            });



        }


    );


};
const conexion = require("../config/db");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv").config();




// LOGIN

exports.login = (req,res)=>{


    const {correo,password}=req.body;



    conexion.query(

        "SELECT * FROM usuarios WHERE correo=?",

        [correo],

        async(error,resultados)=>{


            if(error){

                return res.status(500).json(error);

            }



            if(resultados.length===0){

                return res.status(401).json({

                    mensaje:"Usuario no encontrado"

                });

            }



            const usuario = resultados[0];




            const passwordCorrecta = await bcrypt.compare(

                password,

                usuario.password

            );




            if(!passwordCorrecta){

                return res.status(401).json({

                    mensaje:"Contraseña incorrecta"

                });

            }







            const token = jwt.sign(

                {

                    id:usuario.id,

                    nombre:usuario.nombre,

                    correo:usuario.correo,

                    rol:usuario.rol


                },

                process.env.JWT_SECRET,

                {

                    expiresIn:"8h"

                }


            );







            res.json({

                mensaje:"Login correcto",

                token,

                usuario:{


                    id:usuario.id,

                    nombre:usuario.nombre,

                    rol:usuario.rol


                }


            });



        }


    );



};
const conexion = require("../config/db");

const bcrypt = require("bcrypt");




// ===============================
// LOGIN
// ===============================

exports.login = (req, res) => {


    const { correo, password } = req.body;



    conexion.query(

        "SELECT * FROM usuarios WHERE correo=?",

        [

            correo

        ],

        async(error, resultado)=>{


            if(error){

                return res.status(500).json(error);

            }



            if(resultado.length === 0){


                return res.status(401).json({

                    mensaje:"Usuario no encontrado"

                });


            }



            const usuario = resultado[0];




            const contraseñaCorrecta = await bcrypt.compare(

                password,

                usuario.password

            );





            if(!contraseñaCorrecta){


                return res.status(401).json({

                    mensaje:"Contraseña incorrecta"

                });


            }






            res.json({

                mensaje:"Login correcto",

                usuario:{


                    id: usuario.id,

                    nombre: usuario.nombre,

                    correo: usuario.correo,

                    rol: usuario.rol


                }


            });



        }


    );


};
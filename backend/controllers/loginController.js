const loginModel = require("../models/loginModel");




// Iniciar sesión

exports.login = (req, res) => {


    const { correo, password } = req.body;



    loginModel.loginUsuario(
        
        correo,
        password,

        (error, resultado)=>{


            if(error){

                return res.status(500).json({
                    mensaje:"Error en el servidor"
                });

            }





            if(resultado.length === 0){


                return res.status(401).json({

                    mensaje:"Correo o contraseña incorrectos"

                });


            }






            const usuario = resultado[0];



            res.json({

                mensaje:"Login correcto",

                usuario

            });





        }


    );



};
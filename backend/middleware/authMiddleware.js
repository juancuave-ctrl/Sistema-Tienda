const jwt = require("jsonwebtoken");


require("dotenv").config();



const verificarToken = (req, res, next) => {


    const header = req.headers["authorization"];



    if(!header){

        return res.status(401).json({

            mensaje:"Token requerido"

        });

    }



    const token = header.split(" ")[1];



    if(!token){

        return res.status(401).json({

            mensaje:"Token inválido"

        });

    }



    jwt.verify(

        token,

        process.env.JWT_SECRET,

        (error, usuario)=>{


            if(error){

                return res.status(403).json({

                    mensaje:"Token expirado o incorrecto"

                });

            }



            req.usuario = usuario;


            next();


        }


    );


};




module.exports = verificarToken;
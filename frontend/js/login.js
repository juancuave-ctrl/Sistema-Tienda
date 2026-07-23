const API = "http://localhost:3000/api/login";


const formulario = document.getElementById("formLogin");

const mensaje = document.getElementById("mensaje");





formulario.addEventListener("submit", async (e)=>{


    e.preventDefault();




    const datos = {


        correo:
        document.getElementById("correo").value,


        password:
        document.getElementById("password").value


    };





    try {



        const respuesta = await fetch(API, {


            method:"POST",


            headers:{


                "Content-Type":"application/json"


            },


            body:JSON.stringify(datos)



        });






        const resultado = await respuesta.json();





        console.log(resultado);






        if(respuesta.ok){



            // Guardar usuario conectado

            localStorage.setItem(

                "usuario",

                JSON.stringify(resultado.usuario)

            );




            mensaje.innerHTML = `

                <div class="alert alert-success">

                    Bienvenido ${resultado.usuario.nombre}

                </div>

            `;






            setTimeout(()=>{


                window.location.href = "index.html";


            },1000);





        }else{



            mensaje.innerHTML = `

            <div class="alert alert-danger">

                ${resultado.mensaje}

            </div>

            `;


        }





    }catch(error){



        console.error(error);


        mensaje.innerHTML = `

        <div class="alert alert-danger">

            Error de conexión con el servidor

        </div>

        `;



    }





});
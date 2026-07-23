const API = "http://localhost:3000/api/entradas";


const formulario = document.getElementById("formEntrada");

const tabla = document.getElementById("tablaEntradas");




// Cargar entradas

async function cargarEntradas(){


    try{


        const respuesta = await fetch(API);


        const entradas = await respuesta.json();



        tabla.innerHTML = "";



        entradas.forEach(entrada => {



            tabla.innerHTML += `

            <tr>

                <td>${entrada.id}</td>

                <td>${entrada.producto}</td>

                <td>${entrada.cantidad}</td>

                <td>${entrada.proveedor}</td>

                <td>${entrada.fecha}</td>

            </tr>

            `;


        });



    }catch(error){


        console.error(
            "Error cargando entradas:",
            error
        );


    }


}







// Registrar entrada

formulario.addEventListener(
"submit",
async(e)=>{


    e.preventDefault();



    const entrada = {


        producto:
        document.getElementById("producto").value,


        cantidad:
        document.getElementById("cantidad").value,


        proveedor:
        document.getElementById("proveedor").value


    };





    try{


        const respuesta = await fetch(API,{


            method:"POST",


            headers:{


                "Content-Type":"application/json"


            },


            body:JSON.stringify(entrada)



        });




        const datos = await respuesta.json();



        alert(datos.mensaje);



        formulario.reset();



        cargarEntradas();



    }catch(error){



        console.error(error);


        alert(
            "Error al registrar entrada"
        );


    }



});





cargarEntradas();
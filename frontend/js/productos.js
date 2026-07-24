const API = "http://localhost:3000/api/productos";


// Elementos HTML

const formulario = document.getElementById("formProducto");
const tablaProductos = document.getElementById("tablaProductos");



// ===============================
// OBTENER TOKEN
// ===============================

function obtenerToken(){

    return localStorage.getItem("token");

}



// ===============================
// CARGAR PRODUCTOS
// ===============================

async function cargarProductos(){


    try{


        const respuesta = await fetch(API, {


            headers:{


                "Authorization":"Bearer " + obtenerToken()


            }


        });



        const productos = await respuesta.json();



        tablaProductos.innerHTML = "";



        productos.forEach(producto => {



            tablaProductos.innerHTML += `


            <tr>

                <td>${producto.id}</td>

                <td>${producto.nombre}</td>

                <td>$ ${Number(producto.precio).toLocaleString("es-CO")}</td>

                <td>${producto.cantidad}</td>


                <td>


                    <button

                    class="btn btn-danger btn-sm"

                    onclick="eliminarProducto(${producto.id})">

                    Eliminar

                    </button>


                </td>


            </tr>


            `;


        });



    }catch(error){


        console.error(
            "Error cargando productos:",
            error
        );


    }


}






// ===============================
// CREAR PRODUCTO
// ===============================


formulario.addEventListener("submit", async(e)=>{


    e.preventDefault();



    const producto = {


        nombre:document.getElementById("nombre").value,


        precio:document.getElementById("precio").value,


        cantidad:document.getElementById("cantidad").value


    };




    const respuesta = await fetch(API, {


        method:"POST",


        headers:{


            "Content-Type":"application/json",


            "Authorization":"Bearer " + obtenerToken()


        },


        body:JSON.stringify(producto)



    });




    const resultado = await respuesta.json();



    console.log(resultado);



    alert(resultado.mensaje);



    formulario.reset();


    cargarProductos();



});







// ===============================
// ELIMINAR PRODUCTO
// ===============================


async function eliminarProducto(id){



    if(!confirm("¿Eliminar producto?")){


        return;


    }




    const respuesta = await fetch(`${API}/${id}`,{


        method:"DELETE",


        headers:{


            "Authorization":"Bearer " + obtenerToken()


        }



    });




    const resultado = await respuesta.json();



    alert(resultado.mensaje);



    cargarProductos();



}






// INICIO

cargarProductos();
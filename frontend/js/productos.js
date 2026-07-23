const API = "http://localhost:3000/api/productos";
console.log("productos.js cargado correctamente");

const tabla = document.getElementById("tablaProductos");
const formulario = document.getElementById("formProducto");



// Cargar productos

async function cargarProductos() {

    try {

        const respuesta = await fetch(API);

        const productos = await respuesta.json();


        tabla.innerHTML = "";


        productos.forEach(producto => {


            tabla.innerHTML += `

            <tr>

                <td>${producto.id}</td>

                <td>${producto.nombre}</td>

                <td>$${producto.precio}</td>

                <td>${producto.cantidad}</td>


                <td>


                    <button 
                        class="btn btn-warning btn-sm"
                        onclick="editarProducto(${producto.id})">

                        Editar

                    </button>



                    <button
                        class="btn btn-danger btn-sm"
                        onclick="eliminarProducto(${producto.id})">

                        Eliminar

                    </button>


                </td>


            </tr>

            `;


        });


    } catch(error) {


        console.error("Error al cargar productos:", error);


    }


}




// Crear producto

formulario.addEventListener("submit", async (e)=>{


    e.preventDefault();



    const producto = {


        nombre: document.getElementById("nombre").value,


        precio: document.getElementById("precio").value,


        cantidad: document.getElementById("cantidad").value


    };



    const respuesta = await fetch(API, {


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify(producto)



    });



    const datos = await respuesta.json();



    alert(datos.mensaje);



    formulario.reset();



    cargarProductos();



});





// Eliminar producto

async function eliminarProducto(id){



    if(!confirm("¿Desea eliminar este producto?")){

        return;

    }



    try{


        const respuesta = await fetch(`${API}/${id}`,{


            method:"DELETE"


        });



        const datos = await respuesta.json();



        alert(datos.mensaje);



        cargarProductos();



    }catch(error){


        console.error(error);


        alert("Error al eliminar producto");


    }


}







// Editar producto

async function editarProducto(id){



    const nombre = prompt("Nuevo nombre del producto:");

    const precio = prompt("Nuevo precio:");

    const cantidad = prompt("Nueva cantidad:");



    if(!nombre || !precio || !cantidad){

        return;

    }




    const producto = {


        nombre,

        precio,

        cantidad


    };




    try{


        const respuesta = await fetch(`${API}/${id}`,{


            method:"PUT",


            headers:{


                "Content-Type":"application/json"


            },


            body:JSON.stringify(producto)



        });




        const datos = await respuesta.json();




        alert(datos.mensaje);




        cargarProductos();



    }catch(error){


        console.error(error);


        alert("Error al editar producto");


    }



}




// Iniciar

cargarProductos();
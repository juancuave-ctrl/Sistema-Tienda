const API = "http://localhost:3000/api/proveedores";

const tabla = document.getElementById("tablaProveedores");
const formulario = document.getElementById("formProveedor");


async function cargarProveedores() {

    try {

        const respuesta = await fetch(API);
        const proveedores = await respuesta.json();

        tabla.innerHTML = "";

        proveedores.forEach(proveedor => {

            tabla.innerHTML += `

            <tr>

                <td>${proveedor.id}</td>
                <td>${proveedor.nombre}</td>
                <td>${proveedor.correo}</td>
                <td>${proveedor.telefono}</td>

                <td>

                    <button class="btn btn-warning btn-sm"
                        onclick="editarProveedor(${proveedor.id})">
                        Editar
                    </button>


                    <button class="btn btn-danger btn-sm"
                        onclick="eliminarProveedor(${proveedor.id})">
                        Eliminar
                    </button>

                </td>

            </tr>

            `;

        });


    } catch (error) {

        console.error("Error al cargar proveedores:", error);

    }

}



// Crear proveedor

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();


    const proveedor = {

        nombre: document.getElementById("nombre").value,

        correo: document.getElementById("correo").value,

        telefono: document.getElementById("telefono").value

    };


    const respuesta = await fetch(API, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(proveedor)

    });


    const resultado = await respuesta.json();


    alert(resultado.mensaje);


    formulario.reset();


    cargarProveedores();


});




// Eliminar proveedor

async function eliminarProveedor(id) {


    if (!confirm("¿Desea eliminar este proveedor?")) {

        return;

    }


    try {


        const respuesta = await fetch(`${API}/${id}`, {

            method: "DELETE"

        });



        const resultado = await respuesta.json();



        alert(resultado.mensaje);



        cargarProveedores();



    } catch (error) {


        console.error(error);


        alert("Error al eliminar el proveedor");


    }


}





// Editar proveedor

async function editarProveedor(id) {


    const nombre = prompt("Nuevo nombre del proveedor:");

    const correo = prompt("Nuevo correo:");

    const telefono = prompt("Nuevo teléfono:");



    if (!nombre || !correo || !telefono) {

        return;

    }



    const proveedor = {

        nombre,

        correo,

        telefono

    };



    try {


        const respuesta = await fetch(`${API}/${id}`, {


            method: "PUT",


            headers: {


                "Content-Type": "application/json"


            },


            body: JSON.stringify(proveedor)



        });



        const resultado = await respuesta.json();



        alert(resultado.mensaje);



        cargarProveedores();



    } catch (error) {


        console.error(error);


        alert("Error al editar el proveedor");


    }


}




// Cargar datos al iniciar

cargarProveedores();
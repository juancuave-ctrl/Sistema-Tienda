const API = "http://localhost:3000/api/usuarios";


const formulario = document.getElementById("formUsuario");

const tabla = document.getElementById("tablaUsuarios");


let usuarioEditando = null;





// Cargar usuarios

async function cargarUsuarios(){


    const respuesta = await fetch(API);


    const usuarios = await respuesta.json();



    tabla.innerHTML = "";



    usuarios.forEach((usuario)=>{


        tabla.innerHTML += `

        <tr>

            <td>${usuario.id}</td>

            <td>${usuario.nombre}</td>

            <td>${usuario.correo}</td>

            <td>${usuario.rol}</td>


            <td>


            <button 
            class="btn btn-warning btn-sm"
            onclick="editarUsuario(${usuario.id}, '${usuario.nombre}', '${usuario.correo}', '${usuario.rol}')">

            ✏️ Editar

            </button>



            <button 
            class="btn btn-danger btn-sm"
            onclick="eliminarUsuario(${usuario.id})">

            🗑️ Eliminar

            </button>


            </td>


        </tr>

        `;


    });



}








// Guardar o actualizar usuario

formulario.addEventListener(
"submit",

async(e)=>{


    e.preventDefault();



    const datos = {


        nombre:
        document.getElementById("nombre").value,


        correo:
        document.getElementById("correo").value,


        rol:
        document.getElementById("rol").value



    };






    // Si estamos editando

    if(usuarioEditando){



        await fetch(

            `${API}/${usuarioEditando}`,

            {

            method:"PUT",

            headers:{

                "Content-Type":"application/json"

            },


            body:JSON.stringify(datos)


            }


        );



        alert(
            "Usuario actualizado correctamente"
        );



        usuarioEditando = null;



    }


    else{



        datos.password = 
        document.getElementById("password").value;



        await fetch(

            API,

            {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },


            body:JSON.stringify(datos)


            }


        );



        alert(
            "Usuario creado correctamente"
        );



    }





    formulario.reset();


    document.querySelector("button[type='submit']").innerHTML =
    "Guardar Usuario";



    cargarUsuarios();



});










// Editar usuario

function editarUsuario(id,nombre,correo,rol){


    usuarioEditando = id;



    document.getElementById("nombre").value = nombre;


    document.getElementById("correo").value = correo;


    document.getElementById("rol").value = rol;



    document.getElementById("password").value = "";



    document.querySelector("button[type='submit']").innerHTML =
    "Actualizar Usuario";



}










// Eliminar usuario

async function eliminarUsuario(id){



    if(!confirm("¿Desea eliminar este usuario?")){

        return;

    }




    await fetch(

        `${API}/${id}`,

        {

        method:"DELETE"

        }

    );



    alert(
        "Usuario eliminado correctamente"
    );


    cargarUsuarios();



}







cargarUsuarios();
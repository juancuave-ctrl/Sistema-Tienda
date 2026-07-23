// Verificar sesión activa

function verificarSesion(){


    const usuario = localStorage.getItem("usuario");



    if(!usuario){


        window.location.href = "login.html";


    }


}





// Obtener usuario conectado

function obtenerUsuario(){


    const usuario = localStorage.getItem("usuario");



    if(usuario){


        return JSON.parse(usuario);


    }


    return null;


}





// Cerrar sesión

function cerrarSesion(){


    localStorage.removeItem("usuario");


    window.location.href = "login.html";


}





// Verificar permisos por rol

function verificarRol(){


    const usuario = obtenerUsuario();



    if(!usuario){

        return;

    }



    const rol = usuario.rol;




    // Si es vendedor ocultamos opciones administrativas

    if(rol === "Vendedor"){



        const opcionesAdmin = document.querySelectorAll(".admin");



        opcionesAdmin.forEach((elemento)=>{


            elemento.style.display = "none";


        });


    }



}
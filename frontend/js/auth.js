// ===============================
// PROTEGER PÁGINAS
// ===============================


const usuario = localStorage.getItem("usuario");



if(!usuario){


    window.location.href = "../login.html";


}




// Obtener datos del usuario

const datosUsuario = JSON.parse(usuario);




// Mostrar nombre si existe

const nombreUsuario = document.getElementById(
    "nombreUsuario"
);



if(nombreUsuario){


    nombreUsuario.textContent =
    datosUsuario.nombre;


}




// Mostrar rol si existe

const rolUsuario = document.getElementById(
    "rolUsuario"
);



if(rolUsuario){


    rolUsuario.textContent =
    datosUsuario.rol;


}






// ===============================
// CERRAR SESIÓN
// ===============================

const btnSalir = document.getElementById(
    "cerrarSesion"
);



if(btnSalir){


    btnSalir.addEventListener(
    "click",
    ()=>{


        localStorage.removeItem(
            "usuario"
        );


        window.location.href =
        "../login.html";


    });


}
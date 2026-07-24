const API_LOGIN = "http://localhost:3000/api/auth/login";

const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try {

        const respuesta = await fetch(API_LOGIN, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                correo,
                password

            })

        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {

            alert(datos.mensaje);
            return;

        }

        // ==========================
        // GUARDAR TOKEN
        // ==========================

        localStorage.setItem("token", datos.token);

        // ==========================
        // GUARDAR USUARIO
        // ==========================

        localStorage.setItem(

            "usuario",

            JSON.stringify(datos.usuario)

        );

        alert("Bienvenido " + datos.usuario.nombre);

        window.location.href = "pages/dashboard.html";

    } catch (error) {

        console.error(error);

        alert("Error conectando con el servidor");

    }

});
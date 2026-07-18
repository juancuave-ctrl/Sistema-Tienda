const tabla = document.getElementById("tablaUsuarios");
const formulario = document.getElementById("formUsuario");

async function cargarUsuarios() {

    const respuesta = await fetch("http://localhost:3000/api/usuarios");
    const usuarios = await respuesta.json();

    tabla.innerHTML = "";

    usuarios.forEach(usuario => {

        tabla.innerHTML += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>
                <button onclick="eliminarUsuario(${usuario.id})">
                    Eliminar
                </button>
            </td>
        </tr>
        `;

    });

}

cargarUsuarios();

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const respuesta = await fetch("http://localhost:3000/api/usuarios", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nombre,
            correo,
            password
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

    formulario.reset();

    cargarUsuarios();

});

async function eliminarUsuario(id) {

    if (!confirm("¿Desea eliminar este usuario?")) {
        return;
    }

    await fetch(`http://localhost:3000/api/usuarios/${id}`, {
        method: "DELETE"
    });

    cargarUsuarios();

}
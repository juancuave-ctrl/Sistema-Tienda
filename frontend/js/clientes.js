const API = "http://localhost:3000/api/clientes";

const tabla = document.getElementById("tablaClientes");
const formulario = document.getElementById("formCliente");

// Mostrar clientes
async function cargarClientes() {

    const respuesta = await fetch(API);
    const clientes = await respuesta.json();

    tabla.innerHTML = "";

    clientes.forEach(cliente => {

        tabla.innerHTML += `
            <tr>
                <td>${cliente.id}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.correo}</td>
                <td>${cliente.telefono}</td>
            </tr>
        `;

    });

}

// Guardar cliente
formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const cliente = {

        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value

    };

    await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    });

    formulario.reset();

    cargarClientes();

});

cargarClientes();
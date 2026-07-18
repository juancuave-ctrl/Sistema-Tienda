const tabla = document.getElementById("tablaProductos");
const formulario = document.getElementById("formProducto");

async function cargarProductos() {

    const respuesta = await fetch("http://localhost:3000/api/productos");

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
            class="btn btn-danger btn-sm"
            onclick="eliminarProducto(${producto.id})">
            Eliminar
        </button>
    </td>
</tr>
`;

    });

}

cargarProductos();

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;

    const respuesta = await fetch("http://localhost:3000/api/productos", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nombre,
            precio,
            cantidad
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

    formulario.reset();

    cargarProductos();

});
async function eliminarProducto(id){

    if(!confirm("¿Desea eliminar este producto?")){
        return;
    }

    await fetch(`http://localhost:3000/api/productos/${id}`,{
        method:"DELETE"
    });

    cargarProductos();

}
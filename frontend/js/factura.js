const API = "http://localhost:3000/api/ventas";

// Obtener el ID desde la URL
const parametros = new URLSearchParams(window.location.search);
const idVenta = parametros.get("id");

// Cargar factura
async function cargarFactura() {

    if (!idVenta) {

        alert("No se recibió el ID de la venta");

        window.location.href = "ventas.html";

        return;

    }

    try {

        const respuesta = await fetch(API + "/" + idVenta);

        if (!respuesta.ok) {

            throw new Error("No se encontró la venta");

        }

        const venta = await respuesta.json();

        document.getElementById("idVenta").textContent =
"FAC-" + String(venta.id).padStart(6,"0");

        document.getElementById("cliente").textContent = venta.cliente;

        document.getElementById("producto").textContent = venta.producto;

        document.getElementById("cantidad").textContent = venta.cantidad;

        document.getElementById("total").textContent =
            "$ " + Number(venta.total).toLocaleString("es-CO");

        document.getElementById("totalGeneral").textContent =
            "$ " + Number(venta.total).toLocaleString("es-CO");

        if (venta.fecha) {

            document.getElementById("fecha").textContent = venta.fecha;

        } else {

            document.getElementById("fecha").textContent =
                new Date().toLocaleString("es-CO");

        }

    } catch (error) {

        console.error(error);

        alert("No fue posible cargar la factura.");

        window.location.href = "ventas.html";

    }

}

cargarFactura();
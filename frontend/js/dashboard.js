const API = "http://localhost:3000/api/dashboard";

// Elementos
const productos = document.getElementById("productos");
const inventario = document.getElementById("inventario");
const ventas = document.getElementById("ventas");
const ingresos = document.getElementById("ingresos");
const tablaStock = document.getElementById("tablaStock");

let grafica = null;

// Cargar Dashboard
async function cargarDashboard() {

    try {

        const respuesta = await fetch(API);

        const datos = await respuesta.json();

        // Tarjetas
        productos.textContent = datos.productos;

        inventario.textContent = datos.inventario;

        ventas.textContent = datos.ventas;

        ingresos.textContent =
            "$ " + Number(datos.ingresos)
            .toLocaleString("es-CO");

        // Tabla de stock bajo
        tablaStock.innerHTML = "";

        datos.stockBajo.forEach(producto => {

            tablaStock.innerHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                </tr>
            `;

        });

        crearGrafica(datos.ventasProducto);

    }

    catch (error) {

        console.error(error);

    }

}

// Crear gráfica
function crearGrafica(ventasProducto) {

    const ctx = document.getElementById("graficaVentas");

    // Si ya existe una gráfica, destruirla
    if (grafica) {

        grafica.destroy();

    }

    grafica = new Chart(ctx, {

        type: "bar",

        data: {

            labels: ventasProducto.map(item => item.producto),

            datasets: [

                {

                    label: "Ventas realizadas",

                    data: ventasProducto.map(item => item.cantidad),

                    backgroundColor: [

                        "#0d6efd",

                        "#198754",

                        "#ffc107",

                        "#dc3545",

                        "#6f42c1",

                        "#20c997",

                        "#fd7e14",

                        "#0dcaf0"

                    ]

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0

                    }

                }

            }

        }

    });

}

cargarDashboard();
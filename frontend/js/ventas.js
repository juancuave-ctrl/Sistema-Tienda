const API_VENTAS = "http://localhost:3000/api/ventas";

const API_CLIENTES = "http://localhost:3000/api/clientes";

const API_PRODUCTOS = "http://localhost:3000/api/productos";



const formulario = document.getElementById("formVenta");

const tablaVentas = document.getElementById("tablaVentas");

const selectCliente = document.getElementById("cliente");

const selectProducto = document.getElementById("producto");

const precioInput = document.getElementById("precio");

const stockInput = document.getElementById("stock");

const cantidadInput = document.getElementById("cantidad");

const totalInput = document.getElementById("total");



let productos = [];




// ===============================
// CARGAR CLIENTES
// ===============================

async function cargarClientes(){


    const respuesta = await fetch(API_CLIENTES);


    const clientes = await respuesta.json();



    clientes.forEach(cliente=>{


        selectCliente.innerHTML += `

        <option value="${cliente.nombre}">
            ${cliente.nombre}
        </option>

        `;


    });


}






// ===============================
// CARGAR PRODUCTOS
// ===============================

async function cargarProductos(){


    const respuesta = await fetch(API_PRODUCTOS);


    productos = await respuesta.json();



    productos.forEach(producto=>{


        selectProducto.innerHTML += `

        <option value="${producto.id}">
            ${producto.nombre}
        </option>

        `;


    });


}







// ===============================
// SELECCIONAR PRODUCTO
// ===============================

selectProducto.addEventListener("change",()=>{


    const idProducto = selectProducto.value;



    const producto = productos.find(
        p => p.id == idProducto
    );



    if(producto){


        precioInput.value = producto.precio;


        stockInput.value = producto.cantidad;


        calcularTotal();


    }


});








// ===============================
// CALCULAR TOTAL
// ===============================

cantidadInput.addEventListener(
"input",
()=>{


    calcularTotal();


});




function calcularTotal(){


    const precio = Number(precioInput.value);

    const cantidad = Number(cantidadInput.value);



    if(precio && cantidad){


        totalInput.value = precio * cantidad;


    }else{


        totalInput.value = "";


    }


}







// ===============================
// CARGAR VENTAS
// ===============================

async function cargarVentas(){


    const respuesta = await fetch(API_VENTAS);


    const ventas = await respuesta.json();



    tablaVentas.innerHTML = "";



    ventas.forEach(venta=>{


        tablaVentas.innerHTML += `

        <tr>

            <td>${venta.id}</td>

            <td>${venta.cliente}</td>

            <td>${venta.producto}</td>

            <td>${venta.cantidad}</td>

            <td>$${venta.total}</td>

            <td>${venta.fecha ?? ""}</td>


        </tr>

        `;


    });



}







// ===============================
// REGISTRAR VENTA
// ===============================

formulario.addEventListener(
"submit",
async(e)=>{


    e.preventDefault();




    const productoSeleccionado = productos.find(

        p => p.id == selectProducto.value

    );





    const venta = {


        cliente:
        selectCliente.value,


        producto:
        productoSeleccionado.nombre,


        cantidad:
        cantidadInput.value,


        total:
        totalInput.value


    };





    if(Number(cantidadInput.value) > productoSeleccionado.cantidad){


        alert(
            "No hay suficiente inventario"
        );


        return;


    }







    const respuesta = await fetch(API_VENTAS,{


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify(venta)



    });





    const datos = await respuesta.json();

alert(datos.mensaje);

formulario.reset();

await cargarVentas();

await cargarProductos();

// Abrir automáticamente la factura de la venta creada
window.location.href =
    "factura.html?id=" + datos.venta.idVenta;



});







// INICIO

cargarClientes();

cargarProductos();

cargarVentas();
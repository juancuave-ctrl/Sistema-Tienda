const API_REPORTES = "http://localhost:3000/api/reportes";


// Elementos HTML

const tablaReportes = document.getElementById("tablaReportes");

const desde = document.getElementById("desde");

const hasta = document.getElementById("hasta");

const btnBuscar = document.getElementById("btnBuscar");




// Cargar reportes

async function cargarReportes(url = API_REPORTES) {


    try {


        const respuesta = await fetch(url);


        const reportes = await respuesta.json();



        tablaReportes.innerHTML = "";



        reportes.forEach(venta => {



            tablaReportes.innerHTML += `

            <tr>

                <td>${venta.id}</td>

                <td>${venta.cliente}</td>

                <td>${venta.producto}</td>

                <td>${venta.cantidad}</td>

                <td>$ ${Number(venta.total).toLocaleString("es-CO")}</td>

                <td>${venta.fecha ?? ""}</td>


            </tr>


            `;



        });



    } catch(error) {


        console.error(
            "Error cargando reportes:",
            error
        );


    }


}






// Buscar por fechas

btnBuscar.addEventListener("click",()=>{


    if(desde.value && hasta.value){


        const url = 
        `${API_REPORTES}/buscar?desde=${desde.value}&hasta=${hasta.value}`;



        cargarReportes(url);



    }else{


        cargarReportes();


    }



});






// Inicio

cargarReportes();
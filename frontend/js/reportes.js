const API_REPORTES = "http://localhost:3000/api/reportes";

const API_EXPORTAR = "http://localhost:3000/api/exportar";


// Elementos HTML

const tablaReportes = document.getElementById("tablaReportes");

const desde = document.getElementById("desde");

const hasta = document.getElementById("hasta");

const btnBuscar = document.getElementById("btnBuscar");

const btnPDF = document.getElementById("btnPDF");

const btnExcel = document.getElementById("btnExcel");




// ===============================
// CARGAR REPORTES
// ===============================

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

                <td>
                    $ ${Number(venta.total).toLocaleString("es-CO")}
                </td>

                <td>
                    ${venta.fecha ?? ""}
                </td>


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






// ===============================
// BUSCAR POR FECHAS
// ===============================

btnBuscar.addEventListener("click",()=>{


    if(desde.value && hasta.value){


        const url = 
        `${API_REPORTES}/buscar?desde=${desde.value}&hasta=${hasta.value}`;



        cargarReportes(url);



    }else{


        cargarReportes();


    }


});







// ===============================
// EXPORTAR PDF
// ===============================

btnPDF.addEventListener("click",()=>{


    window.open(

        `${API_EXPORTAR}/pdf`,

        "_blank"

    );


});







// ===============================
// EXPORTAR EXCEL
// ===============================

btnExcel.addEventListener("click",()=>{


    window.open(

        `${API_EXPORTAR}/excel`,

        "_blank"

    );


});







// ===============================
// INICIO
// ===============================

cargarReportes();
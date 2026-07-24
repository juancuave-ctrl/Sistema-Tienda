const API = "http://localhost:3000/api/auditoria";


const tablaAuditoria = document.getElementById("tablaAuditoria");


async function cargarAuditoria(){


    const token = localStorage.getItem("token");


    const respuesta = await fetch(API, {


        headers:{


            "Authorization":"Bearer " + token


        }


    });



    const datos = await respuesta.json();



    console.log(datos);



    tablaAuditoria.innerHTML = "";



    datos.forEach(item=>{


        tablaAuditoria.innerHTML += `

        <tr>

            <td>${item.usuario}</td>

            <td>${item.accion}</td>

            <td>${item.modulo}</td>

            <td>${item.descripcion}</td>

            <td>${item.fecha}</td>

        </tr>

        `;


    });


}



cargarAuditoria();
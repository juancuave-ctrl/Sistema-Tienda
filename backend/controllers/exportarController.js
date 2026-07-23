const conexion = require("../config/db");

const PDFDocument = require("pdfkit");

const ExcelJS = require("exceljs");




// ===============================
// EXPORTAR PDF
// ===============================

exports.exportarPDF = (req, res) => {


    conexion.query(

        "SELECT * FROM ventas ORDER BY fecha DESC",

        (error, ventas)=>{


            if(error){

                return res.status(500).json(error);

            }




            const doc = new PDFDocument();



            res.setHeader(
                "Content-Type",
                "application/pdf"
            );


            res.setHeader(

                "Content-Disposition",

                "attachment; filename=Reporte_Ventas.pdf"

            );



            doc.pipe(res);



            doc.fontSize(20)

            .text(
                "Sistema Tienda - Reporte de Ventas",
                {
                    align:"center"
                }
            );



            doc.moveDown();



            ventas.forEach(venta=>{


                doc.fontSize(12)

                .text(

`ID: ${venta.id}
Cliente: ${venta.cliente}
Producto: ${venta.producto}
Cantidad: ${venta.cantidad}
Total: $${venta.total}
Fecha: ${venta.fecha}

-------------------------`

                );


            });



            doc.end();



        }


    );


};









// ===============================
// EXPORTAR EXCEL
// ===============================

exports.exportarExcel = async (req,res)=>{


    conexion.query(

        "SELECT * FROM ventas ORDER BY fecha DESC",

        async(error, ventas)=>{


            if(error){

                return res.status(500).json(error);

            }



            const workbook = new ExcelJS.Workbook();



            const hoja = workbook.addWorksheet(
                "Ventas"
            );



            hoja.columns = [


                {
                    header:"ID",
                    key:"id",
                    width:10
                },


                {
                    header:"Cliente",
                    key:"cliente",
                    width:20
                },


                {
                    header:"Producto",
                    key:"producto",
                    width:20
                },


                {
                    header:"Cantidad",
                    key:"cantidad",
                    width:15
                },


                {
                    header:"Total",
                    key:"total",
                    width:15
                },


                {
                    header:"Fecha",
                    key:"fecha",
                    width:20
                }


            ];





            ventas.forEach(venta=>{


                hoja.addRow(venta);


            });





            res.setHeader(

                "Content-Type",

                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

            );



            res.setHeader(

                "Content-Disposition",

                "attachment; filename=Reporte_Ventas.xlsx"

            );





            await workbook.xlsx.write(res);



            res.end();



        }


    );


};
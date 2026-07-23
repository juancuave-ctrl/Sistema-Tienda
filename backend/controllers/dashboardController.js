const dashboardModel = require("../models/dashboardModel");




// Obtener datos del dashboard

exports.obtenerDashboard = (req, res) => {


    dashboardModel.totalProductos((error, productos)=>{


        if(error){
            return res.status(500).json(error);
        }



        dashboardModel.totalInventario((error, inventario)=>{


            if(error){
                return res.status(500).json(error);
            }




            dashboardModel.totalVentas((error, ventas)=>{


                if(error){
                    return res.status(500).json(error);
                }





                dashboardModel.ingresosTotales((error, ingresos)=>{


                    if(error){
                        return res.status(500).json(error);
                    }






                    dashboardModel.productosBajos((error, stockBajo)=>{


                        if(error){
                            return res.status(500).json(error);
                        }






                        dashboardModel.productoMasVendido((error, productoTop)=>{


                            if(error){
                                return res.status(500).json(error);
                            }







                            dashboardModel.ventasHoy((error, ventasHoy)=>{


                                if(error){
                                    return res.status(500).json(error);
                                }







                                dashboardModel.ultimasVentas((error, ultimasVentas)=>{


                                    if(error){
                                        return res.status(500).json(error);
                                    }







                                    res.json({


                                        productos:
                                        productos[0].total,



                                        inventario:
                                        inventario[0].total || 0,



                                        ventas:
                                        ventas[0].total,



                                        ingresos:
                                        ingresos[0].total || 0,



                                        stockBajo,



                                        productoMasVendido:
                                        productoTop[0] || {},



                                        ventasHoy:
                                        ventasHoy[0].total || 0,



                                        ultimasVentas



                                    });





                                });





                            });





                        });





                    });





                });





            });





        });





    });



};
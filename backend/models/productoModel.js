const conexion = require("../config/db");


// Obtener todos los productos
const obtenerProductos = (callback) => {

    conexion.query(
        "SELECT * FROM productos",
        callback
    );

};




// Crear un producto
const crearProducto = (producto, callback) => {


    const { nombre, precio, cantidad } = producto;


    conexion.query(

        "INSERT INTO productos(nombre, precio, cantidad) VALUES (?, ?, ?)",

        [
            nombre,
            precio,
            cantidad
        ],

        callback

    );


};




// Eliminar un producto
const eliminarProducto = (id, callback) => {


    conexion.query(

        "DELETE FROM productos WHERE id = ?",

        [id],

        callback

    );


};






// Actualizar un producto
const actualizarProducto = (id, producto, callback) => {


    const { nombre, precio, cantidad } = producto;


    conexion.query(

        "UPDATE productos SET nombre = ?, precio = ?, cantidad = ? WHERE id = ?",


        [
            nombre,
            precio,
            cantidad,
            id
        ],


        callback

    );


};






module.exports = {

    obtenerProductos,

    crearProducto,

    eliminarProducto,

    actualizarProducto

};
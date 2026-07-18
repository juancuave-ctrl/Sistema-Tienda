const conexion = require("../config/db");

// Obtener productos
exports.obtenerProductos = (req, res) => {
    conexion.query("SELECT * FROM productos", (error, resultados) => {
        if (error) return res.status(500).json(error);
        res.json(resultados);
    });
};

// Crear producto
exports.crearProducto = (req, res) => {
    const { nombre, precio, cantidad } = req.body;

    conexion.query(
        "INSERT INTO productos(nombre,precio,cantidad) VALUES(?,?,?)",
        [nombre, precio, cantidad],
        (error) => {
            if (error) return res.status(500).json(error);
            res.json({ mensaje: "Producto creado correctamente" });
        }
    );
};
// Eliminar producto
exports.eliminarProducto = (req, res) => {

    const id = req.params.id;

    conexion.query(
        "DELETE FROM productos WHERE id = ?",
        [id],
        (error) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: "Producto eliminado correctamente"
            });

        }
    );

};
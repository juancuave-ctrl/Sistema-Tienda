const conexion = require("../config/db");

// Obtener usuarios
exports.obtenerUsuarios = (req, res) => {
    conexion.query("SELECT * FROM usuarios", (error, resultados) => {
        if (error) return res.status(500).json(error);
        res.json(resultados);
    });
};

// Crear usuario
exports.crearUsuario = (req, res) => {
    const { nombre, correo, password } = req.body;

    conexion.query(
        "INSERT INTO usuarios(nombre, correo, password) VALUES (?, ?, ?)",
        [nombre, correo, password],
        (error) => {
            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: "Usuario creado correctamente"
            });
        }
    );
};
// Eliminar usuario
exports.eliminarUsuario = (req, res) => {

    const id = req.params.id;

    conexion.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id],
        (error) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: "Usuario eliminado correctamente"
            });

        }
    );

};
const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tienda"
});

conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error);
        return;
    }

    console.log("✅ Base de datos conectada correctamente");
});

module.exports = conexion;
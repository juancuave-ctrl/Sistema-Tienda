const express = require("express");
const cors = require("cors");

const conexion = require("./config/db");

const usuarioRoutes = require("./routes/usuarioRoutes");
const productoRoutes = require("./routes/productoRoutes");
const ventaRoutes = require("./routes/ventaRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const proveedorRoutes = require("./routes/proveedorRoutes");
const entradaRoutes = require("./routes/entradaRoutes");
const loginRoutes = require("./routes/loginRoutes");
const reporteRoutes = require("./routes/reporteRoutes");
const exportarRoutes = require("./routes/exportarRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/entradas", entradaRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/reportes", reporteRoutes);
app.use("/api/exportar", exportarRoutes);
app.get("/", (req, res) => {
    res.send("🚀 API Sistema Tienda funcionando correctamente");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
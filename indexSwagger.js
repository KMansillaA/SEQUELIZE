const express = require("express");
const { Sequelize } = require("sequelize");
const dbConfig = require("./config/config.json").development;
const clienteRoutes = require("./routes/clienteRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");

// 🔹 Importa Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Asegúrate de tener el archivo swagger.js en la raíz

const app = express();
const sequelize = new Sequelize(dbConfig);

app.use(express.json());

// 🔹 Agrega la ruta para la documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/clientes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch(err => console.error("❌ Error al conectar:", err));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API! Usa /clientes, /pedidos o visita /api-docs para la documentación.");
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

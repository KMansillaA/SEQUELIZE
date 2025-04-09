// swagger.js

// Importa el módulo swagger-jsdoc para generar la especificación Swagger desde comentarios JSDoc
const swaggerJSDoc = require("swagger-jsdoc");

// Define las opciones de configuración para Swagger
const options = {
  // Definición general del documento en formato OpenAPI 3.0
  definition: {
    openapi: "3.0.0", // Especifica la versión del estándar OpenAPI que se está utilizando
    info: {
      title: "API de Clientes y Pedidos", // Título que aparecerá en la documentación
      version: "1.0.0", // Versión de la API
      description: "Documentación de la API usando Swagger", // Breve descripción
    },
    servers: [
      {
        url: "http://localhost:3000", // Dirección base del servidor donde corre la API
      },
    ],
  },
  apis: ["./routes/*.js"], // Rutas de los archivos donde están los comentarios JSDoc para documentar
};

// Genera la especificación Swagger en base a las opciones configuradas
const swaggerSpec = swaggerJSDoc(options);

// Exporta la especificación para usarla en el archivo principal (app.js o index.js)
module.exports = swaggerSpec;

// Importar Express
const express = require("express");
const app = express();

// Middleware para JSON (por si usas APIs)
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("🚀 Servidor Node.js funcionando en Render");
});

// Ruta extra de prueba
app.get("/hola", (req, res) => {
  res.send("👋 Hola! Esta es otra ruta en tu servidor");
});

// Ruta API de ejemplo
app.get("/api/datos", (req, res) => {
  res.json({
    mensaje: "Hola desde la API",
    fecha: new Date(),
  });
});

// Render asigna automáticamente el puerto en process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});


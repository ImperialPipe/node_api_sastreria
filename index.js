require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.port;
const clientesRouter = require("./routes/clientes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Root de la aplicación
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Routers
// Ejemplo de enlace http://localhost:3000/clientes
app.use("/clientes", clientesRouter);


// Error handler middleware 
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Ejemplo corriendo en http://localhost:${port}`);
});
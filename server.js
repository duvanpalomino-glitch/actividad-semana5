const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:Duvan', (req, res) => {
  const nombre = req.params.Duvan;
  res.send('Hola ' + nombre);
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
  console.log("Rutas disponibles:")
  console.log("GET  /api/propuestas")
  console.log("POST /api/propuestas")
});
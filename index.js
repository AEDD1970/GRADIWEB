const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3007;

const corsOptions = {
    origin: 'http://localhost:3007/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar el envío de cookies de autenticación
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Configurar el directorio estático para archivos HTML, CSS, etc.
app.use(express.static(path.join(__dirname, 'src'), { 'Content-Type': 'application/javascript' }));
// app.use(express.static(path.join(__dirname, 'public'), { 'Content-Type': 'application/javascript' }));


// Ruta para renderizar el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

  


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});

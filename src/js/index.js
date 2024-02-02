const express = require('express');
const path = require('path');
const app = express();
const port = 3006;

 app.use(express.static(path.join(__dirname, 'src')));


// Ruta específica para manejar el archivo 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
const express = require('express'); // Agrega las dependencias de express.
const { libraryRoute } = require('./routes'); // Incluye la ruta para la libreria.

const port = 5000;

const app = express(); // Instanciamos la app.

// Middlewares
app.use(express.json());

// Routes
app.use('/library', libraryRoute); // Usamos la ruta en '/library'


app.listen(port, () => { // Levantamos el sv.
    console.log(`Server running on port: ${port}`);
});
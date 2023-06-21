const express = require('express'); // Agrega las dependencias de express.
const { libraryRoute, userRoute } = require('./routes'); // Incluye la ruta para la libreria.
const { initializeDb } = require('./config/db-config');
const { userModel } = require('./models');
const { userProvider } = require('./providers');

const port = 5000;

const app = express(); // Instanciamos la app.

// Middlewares
app.use(express.json());

// Routes
app.use('/library', libraryRoute); // Usamos la ruta en '/library'
app.use('/user', userRoute); // Usamos la ruta en '/user'


app.listen(port, async () => { // Levantamos el sv.
    await initializeDb();
    console.log(`Server running on port: ${port}`);
});
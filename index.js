const express = require('express');
const app = express();
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

// Importar rutas
const usuarioRoutes = require('./routes/usuario.routes');
const libroRoutes = require('./routes/libro.routes');
const prestamoRoutes = require('./routes/prestamo.routes');
const resenaRoutes = require('./routes/resena.routes');

// Usar rutas
app.use('/usuarios', usuarioRoutes);
app.use('/libros', libroRoutes);
app.use('/prestamos', prestamoRoutes);
app.use('/resenas', resenaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

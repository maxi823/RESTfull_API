
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'root',       // Reemplaza con tu usuario de PostgreSQL
  host: 'localhost',        // Reemplaza si tu base de datos está en otro lugar
  database: 'biblioteca',   // El nombre de la base de datos que se pide
  password: 'admin',// Reemplaza con tu contraseña
  port: 5432,               // El puerto por defecto de PostgreSQL
});

// Verificación opcional de la conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa:', res.rows[0].now);
  }
});

// Exporta el pool para que pueda ser utilizado por otros archivos
module.exports = pool;
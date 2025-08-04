const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'biblioteca_api',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para verificar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a MySQL exitosa. Pool de conexiones creado.');
    connection.release(); 
  } catch (err) {
    console.error('Error al conectar a MySQL:', err.message);
    process.exit(1);
  }
}

testConnection();

module.exports = pool;
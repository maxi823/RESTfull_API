

// Importa el pool de conexiones que exportamos en db.js
const pool = require('../config/db');

// Función para obtener todos los libros de la base de datos
async function getAllLibros() {
  try {
    const res = await pool.query('SELECT * FROM libros');
    return res.rows;
  } catch (err) {
    console.error('Error al obtener los libros:', err);
    throw err;
  }
}

// Función para agregar un nuevo libro
async function createLibro(titulo, autor) {
  const query = 'INSERT INTO libros(titulo, autor) VALUES($1, $2) RETURNING *';
  const values = [titulo, autor];
  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error('Error al crear el libro:', err);
    throw err;
  }
}

// Exporta las funciones para usarlas en otros archivos (por ejemplo, en tus rutas)
module.exports = {
  getAllLibros,
  createLibro,
};
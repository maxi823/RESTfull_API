// En /test_db.js

const { getAllLibros, createLibro } = require('./model/libro');

async function testDatabaseConnection() {
  try {
    console.log('--- Probando la conexión a la base de datos y la inserción ---');
    
    // 1. Crear un nuevo libro
    const nuevoLibro = await createLibro('Cien años de soledad', 'Gabriel García Márquez');
    console.log('Libro creado:', nuevoLibro);

    // 2. Obtener todos los libros
    const todosLosLibros = await getAllLibros();
    console.log('\n--- Libros en la base de datos ---');
    console.log(todosLosLibros);

  } catch (error) {
    console.error('Ocurrió un error durante la prueba:', error);
  } finally {
    // Es una buena práctica cerrar la conexión del pool al finalizar
    // Sin embargo, para este ejemplo, el proceso se cerrará solo
    // después de ejecutar las promesas.
    console.log('\n--- Fin de la prueba ---');
  }
}

// Ejecuta la función de prueba
testDatabaseConnection();
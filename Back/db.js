const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = require('process.env');
const { Product, User, Category } = require('./models');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false, // Puedes establecerlo en true para ver los logs de Sequelize en la consola
});

Product.belongsTo(User);
User.hasMany(Product);
Product.belongsTo(Category);
Category.hasMany(Product);


// conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

module.exports = sequelize;
// Se importa el módulo Sequelize de la biblioteca Sequelize y los datos de configuración de la base de datos desde process.env. Estos últimos se asumen que están definidos correctamente en tu archivo de entorno (.env o similar).

// Se importan los modelos Product y User desde el archivo models.js. Esto asume que los modelos están definidos y exportados correctamente en ese archivo.

// Se crea una nueva instancia de Sequelize utilizando los datos de configuración de la base de datos.

// Se establecen las relaciones entre los modelos Product y User utilizando los métodos belongsTo y hasMany de Sequelize.

// Se llama al método authenticate() de la instancia de Sequelize para verificar la conexión a la base de datos. Si la conexión es exitosa, se muestra un mensaje de éxito en la consola. Si ocurre algún error, se muestra un mensaje de error en la consola.

// Finalmente, se exporta la instancia de Sequelize, lo que permitirá que otros archivos lo importen y utilicen para realizar consultas y operaciones en la base de datos.
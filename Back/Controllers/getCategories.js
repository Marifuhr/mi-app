const { Category } = require('../models');


async function getCategories(req, res) {
    try {
        const categories = await Category.findAll();
        return res.json(categories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener las categorias' });
    }
}

module.exports = {
    getCategories
}
//Dentro de la función, utilizas Category.findAll() para buscar todas las categorías en la base de datos.
//Luego, devuelves una respuesta JSON con las categorías encontradas utilizando res.json(categories).
//Si se produce algún error durante la búsqueda de las categorías, capturas el error, lo registras en la consola y devuelves una respuesta con un estado de 500 y un mensaje de error.
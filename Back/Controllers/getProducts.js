const { Products } = require('../models');

async function getProducts(req, res) {
    try {
        const products = await Products.findAll();
        return res.json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los productos' });

    }
}


module.exports = {
    getProducts
}

// Dentro de la función, utilizas Products.findAll() para buscar todos los productos en la base de datos.
// Luego, devuelves una respuesta JSON con los productos encontrados utilizando res.json(products).
// Si se produce algún error durante la búsqueda de los productos, capturas el error, lo registras en la consola y devuelves una respuesta con un estado de 500 y un mensaje de error.
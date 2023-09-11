const { Products, Category } = require('../models');

async function createProduct(req, res) {
  try {
    const { name, description, image, price, stock, categoryId } = req.body;

    // Verificar si el stock es un número válido
    if (isNaN(stock)) {
      return res.status(400).json({ message: 'El stock debe ser un número válido' });
    }
    
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    // Crear el producto en la base de datos
    const product = await Products.create({
      name,
      description,
      image,
      price,
      stock,
      categoryId,
    });

    // Actualizar el stock del producto si es necesario
    if (stock > 0) {
      // Puedes implementar lógica adicional aquí, como restar el stock de un inventario global
      console.log(`Se ha agregado stock al producto ${product.name}`);
    }

    // Respuesta exitosa con el producto creado
    return res.status(200).json({ message: 'Producto creado exitosamente', product: { id: product.id, name, description, image, price, stock, categoryId: category.id } });
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el producto' });
  }
}

module.exports = {
  createProduct,
};
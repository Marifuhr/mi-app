const { User } = require('../models');

async function getUser(req, res) {
  try {
    const { id } = req.params;

    // Buscar el usuario por su ID en la base de datos
    const user = await User.findOne({
      where: { id },
    });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Retornar el usuario encontrado
    return res.json(user);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el usuario' });
  }
}

module.exports = {
  getUser,
};

// estamos utilizando el modelo User para buscar un usuario en la base de datos utilizando su ID. Si el usuario no se encuentra, se devuelve una respuesta con un estado de 404 y un mensaje indicando que el usuario no fue encontrado. Si el usuario se encuentra, se devuelve una respuesta con el usuario encontrado.
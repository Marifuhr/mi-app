const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../Models/admin');

async function login(req, res) {
  const { username, password } = req.body;

  // Verificar si el administrador existe en la base de datos
  const admin = await Admin.findOne({ where: { username } });

  if (!admin) {
    return res.status(404).json({ message: 'Administrador no encontrado' });
  }

  // Verificar la contraseña
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  // Generar un token de acceso
  const token = jwt.sign({ id: admin.id }, 'secretKey');

  // Devolver el token y otros datos del administrador si es necesario
  return res.json({ token, admin });
}

// Otras funciones del controlador para crear, editar y administrar administradores

module.exports = {
  login,
};
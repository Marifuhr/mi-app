const { DataTypes } = require('sequelize');
const sequelize = require('..db.js');

const RepairRequest = sequelize.define('RepairRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  deviceType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preferredDateTime: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

module.exports = RepairRequest;
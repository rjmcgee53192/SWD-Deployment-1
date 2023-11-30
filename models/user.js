const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path-to-your-sequelize-instance'); // Update with the path to your Sequelize instance

class User extends Model {}

User.init({
  UserId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  Admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Deleted: { // Add the Deleted field
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../path-to-your-sequelize-instance'); // Update with the path to your Sequelize instance

class Post extends Model {}

Post.init({
  PostId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  PostTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PostBody: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Post'
});

module.exports = Post;

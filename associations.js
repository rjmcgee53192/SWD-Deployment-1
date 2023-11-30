// Import your models
const User = require('./models/user');
const Post = require('./models/post');

// Define associations
User.hasMany(Post, { foreignKey: 'UserId' });
Post.belongsTo(User, { foreignKey: 'UserId' });

module.exports = {
  User,
  Post,
};

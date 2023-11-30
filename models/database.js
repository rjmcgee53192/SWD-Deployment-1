const { Sequelize } = require('sequelize');
const path = require('path');

// Read the current environment, default to 'development' if not set
const env = process.env.NODE_ENV || 'development';

// Load the database config from the JSON file
const config = require(path.join(__dirname, 'config', 'config.json'))[env];

// Initialize Sequelize with your config
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

// Test the DB connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Export the sequelize instance to be used in other parts of the application
module.exports = sequelize;

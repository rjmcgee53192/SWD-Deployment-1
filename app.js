const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { sequelize } = require('./models'); // Make sure to point to where your Sequelize instance is initialized

// Routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Point to your profile routes file
const adminRoutes = require('./routes/adminRoutes'); // Point to your admin routes file

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use authRoutes
app.use('/auth', authRoutes);

// Use postRoutes
app.use('/posts', postRoutes);

// Use profileRoutes
app.use('/profile', profileRoutes);

// Use adminRoutes
app.use('/admin', adminRoutes);

// Sync all models to the database
sequelize.sync({ force: false })  // `force: true` will drop the table if it already exists
  .then(() => {
    console.log(`Database & tables created!`);
  });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

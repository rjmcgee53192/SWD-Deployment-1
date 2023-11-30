const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');  // Adjust the path to your User model
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { FirstName, LastName, Username, Password, Email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await User.create({
      FirstName,
      LastName,
      Username,
      Password: hashedPassword,
      Email,
      Admin: false  // Assuming default admin value is false
    });
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const user = await User.findOne({ where: { Username } });
    if (!user) return res.status(401).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: user.UserId }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged in', token });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error });
  }
});

// Logout (Client should handle by removing token)
router.get('/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

module.exports = router;

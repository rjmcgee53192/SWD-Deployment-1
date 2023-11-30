// In routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Point to your controller file

router.get('/users', adminController.listUsers);

module.exports = router;

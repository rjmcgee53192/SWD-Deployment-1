// profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController'); // Point to your controller file

router.get('/', profileController.viewProfile);

module.exports = router;

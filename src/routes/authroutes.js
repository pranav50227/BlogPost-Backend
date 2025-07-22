const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Route: /api/register
router.post('/register', authController.registerUser);

// Route: /api/login
router.post('/login', authController.loginUser);

module.exports = router;

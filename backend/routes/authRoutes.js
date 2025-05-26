const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// These are my authentication routes. I want users to be able to register and log in, so I set up POST endpoints for each and connect them to the auth controller.

// Authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// These are my user profile routes. I want users to be able to view and update their profile, so I set up GET and PUT endpoints. I protect these routes with authentication middleware.

// User profile routes (protected)
router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

module.exports = router;

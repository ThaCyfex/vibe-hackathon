const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const authMiddleware = require('../middlewares/authMiddleware');

// These are my community post routes. I want users to be able to create and view community posts. I protect the creation route with authentication middleware.

// Community post routes
router.post('/', authMiddleware, communityController.createPost);
router.get('/', communityController.getPosts);

module.exports = router;

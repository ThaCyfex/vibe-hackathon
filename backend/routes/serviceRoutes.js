const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

// These are my service listing routes. I want users to be able to create, view, update, and delete services. I protect modification routes with authentication middleware.

// Service listing routes (protected for modifications)
router.post('/', authMiddleware, serviceController.createService);
router.get('/', serviceController.getServices);
router.put('/:id', authMiddleware, serviceController.updateService);
router.delete('/:id', authMiddleware, serviceController.deleteService);

module.exports = router;

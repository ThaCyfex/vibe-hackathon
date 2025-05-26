const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

// This is my market data route. I want users to be able to get the latest market prices, so I set up a GET endpoint connected to the market controller.
// Market data route for current prices
router.get('/', marketController.getMarketPrices);

module.exports = router;

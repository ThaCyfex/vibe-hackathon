const MarketPrice = require('../models/MarketPrice');

/**
 * Controller to fetch current market price data.
 */
exports.getMarketPrices = async (req, res) => {
  try {
    const prices = await MarketPrice.find({});
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// This is my marketController. I use it to fetch the latest market prices from the database and send them to the frontend. If something goes wrong, I return an error message.

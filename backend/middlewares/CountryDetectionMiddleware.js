/**
 * Middleware to detect user country (using a header or default value)
 */
// This is my CountryDetectionMiddleware. I use it to detect the user's country from a custom header, or default to 'KENYA' if not provided. This helps me serve localized content.
module.exports = (req, res, next) => {
  // Check for a custom header 'x-country' or default to 'KENYA'
  req.country = req.headers['x-country'] || 'KENYA';
  next();
};

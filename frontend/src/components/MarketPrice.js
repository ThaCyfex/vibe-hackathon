import React from 'react';

/**
 * Displays local market price information with currency.
 */
// This is the MarketPrice component. I use it to display the current market price and currency, so users can quickly see up-to-date info.
const MarketPrice = ({ price, currency }) => {
  return (
    <div>
      <h4>Current Market Price</h4>
      <p>{price} {currency}</p>
    </div>
  );
};

export default MarketPrice;

// # Monthly price Helper
// Usage: `{{monthlyPrice}}`
// gets the monthly price of the tier associated with a given post context.

const { SafeString, escapeExpression } = require("../services/handlebars");

const CURRENCIES = {
  'USD': "$",
  'EUR': "€",
  'ETH': "ETH",
  'BTC': "BTC",
};
module.exports = function monthlyPrice() {
  
  let output = "";
  let accessProductsList = this.tiers;
  let suffix = "";

  if (accessProductsList && accessProductsList.length > 0) {
    const tierData = accessProductsList.map((tier) => {
      let _data = {
        monthlyPrice: escapeExpression(tier.monthly_price),
        currency:  escapeExpression(tier.currency),
      } 
      return _data;
    });

    if (tierData.length === 1) {
      const _currency = tierData[0].currency;
      if (_currency === "USD" || _currency === "EUR") {
        output = `${CURRENCIES[_currency]}${tierData[0].monthlyPrice}`;
      } else {
        suffix = CURRENCIES[_currency];
        output = `${tierData[0].monthlyPrice} ${suffix}`;
      }
    }
  }
  return new SafeString(output);
};

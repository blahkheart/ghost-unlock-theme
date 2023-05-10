// # Discounted amount Helper
// Usage: `{{discount}}`
// calculates the discount amount of the yearly price on the tier associated with a given post.

const { SafeString, escapeExpression } = require("../services/handlebars");

module.exports = function discount() {
  
  let output = "";
  let accessProductsList = this.tiers;

  if (accessProductsList && accessProductsList.length > 0) {
    const tierData = accessProductsList.map((tier) => {
      let _data = {
        monthlyPrice: parseInt(tier.monthly_price),
        yearlyPrice: parseInt(tier.yearly_price),
      }; 
      return _data;
    });

    if (tierData.length) {
      const originalYearlyPrice = tierData[0].monthlyPrice * 12
      const discountedYearlyPrice = tierData[0].yearlyPrice
      const discount = Math.floor(
        ((originalYearlyPrice - discountedYearlyPrice) / originalYearlyPrice) *
          100
      );
      output = discount;
       
    }
  }
  return new SafeString(output);
};

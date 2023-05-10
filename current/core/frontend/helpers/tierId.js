// # Tier Id Helper
// Usage: `{{tierId}}`
// gets the Id of the tier associated with a given post.

const { SafeString, escapeExpression } = require("../services/handlebars");

module.exports = function tierId() {
  
  let output = "";
  let accessProductsList = this.tiers;

  if (accessProductsList && accessProductsList.length > 0) {
    const tierData = accessProductsList.map((tier) => {
      return escapeExpression(tier.id);
    });

    if (tierData.length === 1) {
      const _id = tierData[0];
      output = _id;
    }
  }
  return new SafeString(output);
};

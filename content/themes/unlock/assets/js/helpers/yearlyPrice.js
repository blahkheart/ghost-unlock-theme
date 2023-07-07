import getTier from "./getTier";

const CURRENCIES = {
  USD: "$",
  EUR: "€",
  ETH: "ETH",
  BTC: "BTC",
};
async function yearlyPrice(tierName) {
  let output = "";
  let suffix = "";
  const tier = await getTier(tierName);
  const yearlyPrice = tier.yearly_price;
  const currency = tier.currency;

  if (currency === "USD" || currency === "EUR") {
    output = `${CURRENCIES[currency]}${yearlyPrice}`;
  } else {
    suffix = CURRENCIES[currency];
    output = `${yearlyPrice} ${suffix}`;
  }
  return output;
}
export default yearlyPrice;
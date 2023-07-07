import getTier from "./getTier";

const CURRENCIES = {
  USD: "$",
  EUR: "€",
  ETH: "ETH",
  BTC: "BTC",
};

async function monthlyPrice(tierName) {
  let output = "";
  let suffix = "";
  const tier = await getTier(tierName);
  const monthlyPrice = tier.monthly_price;
  const currency = tier.currency;

  if (currency === "USD" || currency === "EUR") {
    output = `${CURRENCIES[currency]}${monthlyPrice}`;
  } else {
    suffix = CURRENCIES[currency];
    output = `${monthlyPrice} ${suffix}`;
  }
  return output;
}
export default monthlyPrice;
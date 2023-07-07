import getTier from "./getTier";

async function discount(tierName) {
  const tier = await getTier(tierName);
  const monthlyPrice = parseInt(tier.monthly_price);
  const yearlyPrice = parseInt(tier.yearly_price);
  const originalYearlyPrice = monthlyPrice * 12;
  const discountedYearlyPrice = yearlyPrice;
  const discount = Math.floor(
    ((originalYearlyPrice - discountedYearlyPrice) / originalYearlyPrice) * 100
  );
  const output = `%${discount} discount`
  return output;
}

export default discount;
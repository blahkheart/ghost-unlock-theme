import getTier from "./getTier";

async function tierId(tierName) {
  const tier = await getTier(tierName);
  return tier.id;
}

export default tierId;
import GhostContentAPI from "@tryghost/content-api";
const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "811441c13447357ec442df3b6d",
  version: "v5.0",
});

const getTier = async (_name) => {
    const tiers = await api.tiers.browse();
    const _tierName = _name.split(" tier")[0];
    const tier = tiers.find(tier => tier.name === _tierName);
    return tier;
} 
export default getTier;
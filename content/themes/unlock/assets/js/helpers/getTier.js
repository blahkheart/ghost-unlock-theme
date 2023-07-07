import GhostContentAPI from "@tryghost/content-api";
import { contentKey, blogUrl } from "../settings";

const api = new GhostContentAPI({
  url: blogUrl,
  key: contentKey,
  version: "v5.0",
});

function getTierName(inputString) {
  // Check if the string contains commas
  if (inputString.includes(",")) {
    // Split the string by commas and remove any leading/trailing spaces
    const tiers = inputString.split(",").map((tier) => tier.trim());
    // Extract the first tier from the array
    let firstTierName = tiers[0];
    // Check if the name contains the word 'tier'
    if (firstTierName.includes(" tier")) {
      const _formattedName = firstTierName
        .split(" ")
        .map((name) => name.trim());
      // Remove the last word 'tier'
      _formattedName.pop();
      // Join words
      firstTierName = _formattedName.join(" ");
    }
    return firstTierName;
  } else {
    // Split the string by spaces and remove any leading/trailing spaces
    const tierNameArr = inputString.split(" ").map((tier) => tier.trim());
    // Remove the last word 'tier'
    tierNameArr.pop();
    // Join words 
    return tierNameArr.join(" ");
  }
}

const getTier = async (_name) => {
  const tiers = await api.tiers.browse();
  const _tierName = getTierName(_name);
  const tier = tiers.find((tier) => tier.name === _tierName);
  return tier;
};
export default getTier;

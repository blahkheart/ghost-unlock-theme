import { Paywall } from "@unlock-protocol/paywall";
import { provider, locks, networkConfigs } from "./paywall-config";

const subscribeBtn = document.querySelector(".subscribe-btn");
const unlockGhostApiBaseUrl = "http://localhost:3000";

const subscribe = async (tierId, isYearly = false) => {
  try {
    const result = await fetch(
      `${unlockGhostApiBaseUrl}/api/tier/get?tierId=${tierId}`
    );
    const data = await result.json();
    const { name, monthlyLockAddress, yearlyLockAddress, network } = data;
    let lockAddress = monthlyLockAddress;
    if (isYearly) {
      lockAddress = yearlyLockAddress;
    }
    locks = {
      [lockAddress]: {
        network,
        name,
        emailRequired: true,
      },
    };
    const paywallConfig = {
      network,
      pessimistic: true,
      locks,
      referrer: "0xCA7632327567796e51920F6b16373e92c7823854", // You can replace with your own address or leave this to support Danny Thomx :) it's up to you!!!
      persistentCheckout: false,
    };
    networkConfigs = {
      [network]: {
        provider,
      },
    };
    const paywall = new Paywall(paywallConfig, networkConfigs, provider);
    const response = await paywall.loadCheckoutModal();
    console.log("response@checkout::", response);
  } catch (e) {
    console.log("SUBSCRIBE_ERR::", e);
  } finally {
    subscribeBtn.classList.remove("is-loading");
  }
};

export default subscribe;

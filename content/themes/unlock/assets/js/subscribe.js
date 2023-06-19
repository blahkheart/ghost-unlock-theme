import { Paywall } from "@unlock-protocol/paywall";
import { provider, locks, networkConfigs } from "./paywall-config";
import { subscribeBtn, unlockGhostApiBaseUrl } from "./settings";

function subscriptionSuccess() {
  const successModal = $("#gh-unlock_success-modal");
  successModal.addClass("is-active");
}

export function subscriptionError(txHash, data) {
  const txHashSection = $("#error-txhash-section");
  const txHashDisplay = $("#error-txhash");
  const errorModal = $("#gh-unlock_error-modal");
  const errorMsgDisplay = $("#error-msg");
  let errorMsg;
  if (data) {
    errorMsg = `${data.message.toUpperCase()}: contact support`;
    errorMsgDisplay.text(errorMsg);
  }
  if (txHash) {
    txHashSection.removeClass("is-hidden");
    txHashDisplay.text(txHash);
  }
  errorModal.addClass("is-active");
}

export const subscribeUser = async (txHash, email, lockAddress) => {
  try {
    const res = await fetch(`${unlockGhostApiBaseUrl}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hash: txHash, email, lockAddress }),
    });
    const data = await res.json();
    if (res.status !== 201) {
      subscriptionError(txHash, data);
    } else {
      subscriptionSuccess();
    }
  } catch (e) {
    console.log("ERR_SUBSCRIBING_USER", e);
  }
};

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
      referrer: "0xCA7632327567796e51920F6b16373e92c7823854", // You can replace with your own address or leave this to support Danny Thomx [Developer] :) it's up to you!!!
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
    console.log("SUBSCRIBE_ERR::", e.message);
    subscriptionError("",e)
  } finally {
    subscribeBtn.classList.remove("is-loading");
  }
};

export default subscribe;

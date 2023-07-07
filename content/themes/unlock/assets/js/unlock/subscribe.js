import { Paywall } from "@unlock-protocol/paywall";
import { networks } from "@unlock-protocol/networks";
import { subscribeBtn, unlockGhostApiBaseUrl } from "./settings";

function subscriptionSuccess() {
  isProcessingSubscription(false);
  $("#gh-unlock_success-modal").addClass("is-active");
}

function subscriptionError(txHash, data) {
  isProcessingSubscription(false);

  const errorModal = $("#gh-unlock_error-modal");
  const errorMsgDisplay = $("#error-msg");
  const errorMsg = data ? `${data.message.toUpperCase()}: contact support` : "";
  const txHashSection = $("#error-txhash-section");
  const txHashText = $("#error-txhash");

  txHashSection.toggleClass("is-hidden", !txHash);
  txHashText.text(txHash);
  errorMsgDisplay.text(errorMsg);
  errorModal.addClass("is-active");
}

function isProcessingSubscription(isLoading = false) {
  $(".loading-overlay").toggleClass("is-hidden", !isLoading);
}

export async function subscribeUser(txHash, email, lockAddress) {
  try {
    isProcessingSubscription(true);
    const res = await fetch(`${unlockGhostApiBaseUrl}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hash: txHash, email, lockAddress }),
    });

    if (res.status !== 201) {
      const data = await res.json();
      subscriptionError(txHash, data);
    } else {
      subscriptionSuccess();
    }
  } catch (e) {
    console.log("ERR_SUBSCRIBING_USER", e);
  }
}

export async function subscribe(tierId, isYearly = false) {
  try {
    const result = await fetch(
      `${unlockGhostApiBaseUrl}/api/tier/get?tierId=${tierId}`
    );
    const data = await result.json();
    const { name, monthlyLockAddress, yearlyLockAddress, network } = data;
    const lockAddress = isYearly ? yearlyLockAddress : monthlyLockAddress;

    const locks = {
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
      referrer: "0xCA7632327567796e51920F6b16373e92c7823854",
      persistentCheckout: false,
    };

    const paywall = new Paywall(networks);
    paywall.setPaywallConfig(paywallConfig);
    const response = await paywall.loadCheckoutModal();
    console.log("response@checkout::", response);
  } catch (e) {
    console.log("SUBSCRIBE_ERR::", e.message);
    subscriptionError("", e);
  } finally {
    subscribeBtn.classList.remove("is-loading");
  }
}

export default subscribe;

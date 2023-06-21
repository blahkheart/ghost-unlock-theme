import { Paywall } from "@unlock-protocol/paywall";
import { provider } from "./paywall-config";
import { subscribeBtn, unlockGhostApiBaseUrl } from "./settings";

function subscriptionSuccess() {
  $("#gh-unlock_success-modal").addClass("is-active");
}

function subscriptionError(txHash, data) {
  const errorModal = $("#gh-unlock_error-modal");
  const errorMsgDisplay = $("#error-msg");
  const errorMsg = data ? `${data.message.toUpperCase()}: contact support` : "";

  $("#error-txhash-section").toggleClass("is-hidden", !txHash);
  $("#error-txhash").text(txHash);
  errorMsgDisplay.text(errorMsg);

  errorModal.addClass("is-active");
}

export async function subscribeUser(txHash, email, lockAddress) {
  try {
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

    const networkConfig = {
      [network]: {
        provider,
      },
    };

    const paywall = new Paywall(paywallConfig, networkConfig, provider);
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

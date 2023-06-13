import { Paywall } from "@unlock-protocol/paywall";
import { provider, locks, networkConfigs } from "./paywall-config";

const subscribeBtn = document.querySelector(".subscribe-btn");
///////////////////test////////////////////////
  // function openModal($el) {
  //   $el.classList.add("is-active");
  // }
  const subscribeUser = async (txHash, email, lockAddress) => {
    const res = await fetch("http://localhost:3000/api/subscribe", {
      method: "POST",
      // mode: "cors",
      // cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ hash: txHash, email, lockAddress }),
    });
    console.log("RES", await res.json());
    if (res.status === 201) {
      const successModal = $("#gh-unlock_success-modal");
      successModal.addClass("is-active")
    }
};
///////////////////test////////////////////////
  
const subscribe = async (
  tierId = "64623d562fe292628404e600",
  isYearly = false
) => {
  try {
    const result = await fetch(
      `http://localhost:3000/api/tier/get?tierId=${tierId}`
    );
    const data = await result.json();
    const { name, monthlyLockAddress, yearlyLockAddress, network } = data;
    let lockAddress = monthlyLockAddress;
    if (isYearly) {
      lockAddress = yearlyLockAddress;
    }
    // locks = {
    //   [lockAddress]: {
    //     network,
    //     name,
    //     emailRequired: true,
    //   },
    // };
    // const paywallConfig = {
    //   network,
    //   pessimistic: true,
    //   locks,
    //   referrer: "0xCA7632327567796e51920F6b16373e92c7823854", // You can replace with your own address or leave this to support Danny Thomx :) it's up to you!!!
    //   persistentCheckout: false,
    // };
    // networkConfigs = {
    //   [network]: {
    //     provider,
    //   },
    // };
    // const paywall = new Paywall(paywallConfig, networkConfigs, provider);
    // const response = await paywall.loadCheckoutModal();
    // console.log("response@checkout::", response);



    console.log("clicked@checkout::", lockAddress);
    subscribeUser("0x9", "dax@cc.com", lockAddress )
  } catch (e) {
    console.log("SUBSCRIBE_ERR::", e);
  } finally {
    subscribeBtn.classList.remove("is-loading");
  }
};

export default subscribe;

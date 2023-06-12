import "../css/main.scss";
import { Paywall } from "@unlock-protocol/paywall";

const ethers = require("ethers");
const provider = window.ethereum; // Initializing RPC provider
const chooseMonthlyBtn = document.getElementById("subscribe-monthly");
const chooseYearlyBtn = document.getElementById("subscribe-yearly");
const tierHeading = document.getElementById("tier-heading");
const tierId = tierHeading.dataset.tier;
const subscribeBtn = document.querySelector(".subscribe-btn");
const getTxReceiptFromHash = async () => {
  try {
    const unlockProvider = "https://rpc.unlock-protocol.com/80001";
    const provider = new ethers.providers.JsonRpcProvider(unlockProvider);
    const txHash =
      "0x1eb453ecf86c4cc553370f2aea48b8a3fca232620e4d1ad0e32d29c795bd6e28";
    const txReceipt = await provider.getTransaction(txHash);
    if (txReceipt === null) {
      console.log("Transaction is still pending");
    } else {
      console.log(
        `Transaction confirmed in block number ${txReceipt.blockNumber}`
      );
      console.log("res", txReceipt.from, txReceipt.to);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

let locks = {
  "0x5e4fadf7bd22d0b0f1ad32dbb646a96852810dac": {
    network: 80001,
    name: "Back Benchers",
    emailRequired: true,
  },
};

let networkConfigs = {
  1: {
    provider,
  },
  // 5: {
  //   provider: provider,
  // },
  // 80001: {
  //   provider: provider,
  // },
};


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

chooseMonthlyBtn.addEventListener("click", function () {
  console.log("choseMonthly@");
  chooseMonthlyBtn.classList.add("is-loading");
  subscribe();
});
chooseYearlyBtn.addEventListener("click", function () {
  console.log("choseYearly@");
  chooseYearlyBtn.classList.add("is-loading");
  subscribe("64623d562fe292628404e600", true);
});
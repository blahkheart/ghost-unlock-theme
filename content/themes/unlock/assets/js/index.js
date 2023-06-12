import "../css/main.scss"
import { Paywall } from "@unlock-protocol/paywall";
const ethers = require("ethers");
const unlockProvider = "https://rpc.unlock-protocol.com/80001";
// Initializing RPC provider
// const provider = new ethers.providers.JsonRpcProvider(unlockProvider);
const provider = window.ethereum;
// let networkConfigs = {
//   1: {
//     provider: "HTTP PROVIDER",
//   },
//   100: {
//     provider: "HTTP PROVIDER",
//   },
//   80001: {
//     provider: "HTTP PROVIDER",
//   },
// };



    
// const locks = {
//   "0x88b19fc7029740795f98b0dcecf67c80918b98ba": {
//     name: "Fit fams",
//     emailRequired: true,
//   },
// };

// let paywallConfig = {
//   network: 80001,
//   pessimistic: true,
//   locks: locks,
//   icon: "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
// //   callToAction: {
// //     default: `Get a ${locks[0].name} membership!`,
// //   },
//   referrer: "0xCA7632327567796e51920F6b16373e92c7823854", // You can replace with your own address or leave this to support DreadGang :) it's up to you!!!
//   persistentCheckout: false,
// };

//     const subscribeMonthly = async (tierId) => {
//         try {
//             console.log("RESULT_LOADING...");

//           chooseMonthlyBtn.classList.add("is-loading");
//           const result = await fetch(
//             `http://localhost:3000/api/tier/get?tierId=${tierId}`
//             //   `http://localhost:3000/api/tier/get?tierId=644294e10e3dfc4e08f1a65b`
//           );
//           const data = await result.json();
//           const { name, lockAddress, network } = data;
//           // paywallConfig = {
//           //   network: 80001, // Network ID (1 is for mainnet, 4 for rinkeby, 100 for xDai, etc)
//           //   locks: {
//           //     [lockAddress]: {
//           //       name: name,
//           //       emailRequired: true,
//           //     },
//           //   },
//           //   };
//           paywallConfig.network = network;
//           paywallConfig.locks = {
//             [lockAddress]: {
//               name: name,
//             },
//           };
//           const paywall = new Paywall(paywallConfig, networkConfigs, provider);
//           const response = await paywall.loadCheckoutModal();
//           console.log("RESULT::", response);
//         } catch (e) {
//         console.log("SUBSCRIBE_ERR::", e);
//         chooseMonthlyBtn.classList.remove("is-loading");
//       }
//     };
//     const getTxReceiptFromHash = async () => {
//       try {
//         const unlockProvider = "https://rpc.unlock-protocol.com/80001";
//         // Initializing RPC provider
//         const provider = new ethers.providers.JsonRpcProvider(unlockProvider);
//         const txHash =
//           "0x1eb453ecf86c4cc553370f2aea48b8a3fca232620e4d1ad0e32d29c795bd6e28";
//         const txReceipt = await provider.getTransaction(txHash);
//         if (txReceipt === null) {
//           console.log("Transaction is still pending");
//         } else {
//           console.log(
//             `Transaction confirmed in block number ${txReceipt.blockNumber}`
//           );
//           console.log("res", txReceipt.from, txReceipt.to);
//         }
//       } catch (error) {
//         console.error(error);
//         return null;
//       }
//     };
// chooseMonthlyBtn.addEventListener(
//     "click", function () {
//         subscribeMonthly("644294e10e3dfc4e08f1a65b")
//     }
//   );
        
  const locks = {
    "0x5e4fadf7bd22d0b0f1ad32dbb646a96852810dac": {
      network: 80001,
      name: "Back Benchers",
      emailRequired: true,
    },
  };

  const paywallConfig = {
    network: 80001,
    pessimistic: true,
    locks: locks,
    referrer: "0xCA7632327567796e51920F6b16373e92c7823854", // You can replace with your own address or leave this to support DreadGang :) it's up to you!!!
    persistentCheckout: false,
  };

  // Configure networks to use
  const networkConfigs = {
    80001: {
      provider: provider,
      //   locksmithUri: "https://locksmith.unlock-protocol.com",
      //   unlockAppUrl: "https://app.unlock-protocol.com",
    },
  };
const paywall = new Paywall(paywallConfig, networkConfigs, provider);
const chooseMonthlyBtn = document.getElementById('subscribe-monthly');
const tierHeading = document.getElementById("tier-heading");
const tierId = tierHeading.dataset.tier;
    console.log("tierId", tierId);
chooseMonthlyBtn.addEventListener('click', async function () {
    console.log("clicked@")
    const response = await paywall.loadCheckoutModal();
    console.log("response@", response);

})
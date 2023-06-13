import "../css/main.scss";
import subscribe from "./subscribe";

const chooseMonthlyBtn = document.getElementById("subscribe-monthly");
const chooseYearlyBtn = document.getElementById("subscribe-yearly");
const tierHeading = document.getElementById("tier-heading");
const tierId = tierHeading.dataset.tier;

// const getTxReceiptFromHash = async () => {
//   try {
//     const unlockProvider = "https://rpc.unlock-protocol.com/80001";
//     const provider = new ethers.providers.JsonRpcProvider(unlockProvider);
//     const txHash =
//       "0x1eb453ecf86c4cc553370f2aea48b8a3fca232620e4d1ad0e32d29c795bd6e28";
//     const txReceipt = await provider.getTransaction(txHash);
//     if (txReceipt === null) {
//       console.log("Transaction is still pending");
//     } else {
//       console.log(
//         `Transaction confirmed in block number ${txReceipt.blockNumber}`
//       );
//       console.log("res", txReceipt.from, txReceipt.to);
//     }
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

chooseMonthlyBtn.addEventListener("click", function () {
  console.log("choseMonthly@");
  chooseMonthlyBtn.classList.add("is-loading");
  subscribe();
});

chooseYearlyBtn.addEventListener("click", function () {
  console.log("choseYearly@");
  chooseYearlyBtn.classList.add("is-loading");
  // subscribe("64623d562fe292628404e600", true);
  subscribe(tierId, true);
});
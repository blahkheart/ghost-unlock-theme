import { plansModal } from "./settings";
import { closeModal } from "./modals-controller";
import { subscribeUser } from "./subscribe";
import "../css/loading.scss";

$(document).ready(function () {
  let email = ""
  let userAddress = ""
  window.addEventListener("unlockProtocol.closeModal", function (event) {
    closeModal(plansModal);
  });

  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    setTimeout(function () { 
      console.log("TX-TRANSACTION_SENT-EVENT::::");
      const txHash = event.detail.hash;
      const lockAddress = event.detail.lock;
      subscribeUser(txHash, email, lockAddress);
    }, 1500);
  });

  window.addEventListener("unlockProtocol.metadata", function (event) {
    console.log("TX-METADATA-EVENT::::");
    userAddress = event.detail[0].userAddress;
    email = event.detail[0].metadata.protected.email;
  });
});

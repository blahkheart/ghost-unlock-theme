import { plansModal } from "./settings";
import { closeModal } from "./modals-controller";
import { subscribeUser } from "./subscribe";

$(document).ready(function () {
  let email = ""
  let userAddress = ""
  window.addEventListener("unlockProtocol.closeModal", function (event) {
    closeModal(plansModal);
  });

  window.addEventListener("unlockProtocol.metadata", function (event) {
    console.log("TX-META", event.detail[0].userAddress);
    userAddress = event.detail[0].userAddress;
    email = event.detail[0].metadata.protected.email;
  });
  
  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    const txHash = event.detail.hash;
    const lockAddress = event.detail.lock;
    subscribeUser(txHash, email, lockAddress);
  });
});

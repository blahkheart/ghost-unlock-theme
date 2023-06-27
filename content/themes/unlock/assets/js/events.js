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

  window.addEventListener("unlockProtocol.metadata", function (event) {
    console.log("TX-META", event.detail[0].metadata);
    console.log("TX-META-DETAIL", event.detail);
    console.log("TX-META-PROTECTED", event.detail[0].metadata.protected);
    console.log("TX-META-EVENT", event);
    userAddress = event.detail[0].userAddress;
    email = event.detail[0].metadata.protected.email;
  });
  
  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    const txHash = event.detail.hash;
    const lockAddress = event.detail.lock;
    console.log("TX-META-EMAIL", email);
    console.log("TX-META-USERADDRESS", userAddress);
    subscribeUser(txHash, email, lockAddress);
  });
});

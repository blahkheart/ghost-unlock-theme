// author: "dannithomx"
// purpose: 


$(document).ready(function () {
  // const signupBtn = $(".gh-unlock_cta-btn-signup");
  // const loginBtn = $(".gh-unlock_cta-btn-login");

  const plansModal = $("#gh-unlock_plans-modal");
  const subscribeBtn = $(".subscribe-btn");
  let email=""

  function closeModal($el) {
    $el.removeClass("is-active");
  }

  window.addEventListener("unlockProtocol.authenticated", function (event) {
    // event.detail.addresss includes the address of the current user, when known
    console.log("address", event.detail.addresss);
  });

  window.addEventListener("unlockProtocol.closeModal", function (event) {
    subscribeBtn.removeClass("is-loading")
    closeModal(plansModal);
  });
  window.addEventListener("unlockProtocol.metadata", function (event) {
    // event.detail.hash includes the hash of the transaction sent
    // event.detail.lock lock address of the transaction sent || 0x1eb453ecf86c4cc553370f2aea48b8a3fca232620e4d1ad0e32d29c795bd6e28
    console.log("tx-metadata", event.detail[0].metadata);
    email = event.detail[0].metadata.protected.email;
    console.log("tx-metadata-email", email);
  });
  
  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    // event.detail.hash includes the hash of the transaction sent
    // event.detail.lock lock address of the transaction sent || 0x1eb453ecf86c4cc553370f2aea48b8a3fca232620e4d1ad0e32d29c795bd6e28
    console.log("tx-hash", event.detail.hash);
    console.log("tx-detail", event.detail);
    console.log("tx-detail-email", email);
  });
});

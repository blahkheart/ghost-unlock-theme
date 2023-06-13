// author: "dannithomx"
// purpose: Event listeners


$(document).ready(function () {
  const plansModal = $("#gh-unlock_plans-modal");
  const subscribeBtn = $(".subscribe-btn");
  let email = ""

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
      const successModal = $("#gh-unlock_success-modal")
      openModal(successModal);
    }
  };

  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.removeClass("is-active");
  }

  // window.addEventListener("unlockProtocol.authenticated", function (event) {
  //   // event.detail.addresss includes the address of the current user, when known
  //   console.log("address", event.detail.addresss);
  // });

  window.addEventListener("unlockProtocol.closeModal", function (event) {
    subscribeBtn.removeClass("is-loading")
    closeModal(plansModal);
  });

  window.addEventListener("unlockProtocol.metadata", function (event) {
    email = event.detail[0].metadata.protected.email;
  });
  
  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    console.log("tx-hash", event.detail.hash);
    console.log("tx-detail", event.detail);
    console.log("tx-detail-email", email);
  });
});

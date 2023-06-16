// purpose: Event listeners

$(document).ready(function () {
  const plansModal = $("#gh-unlock_plans-modal");
  const subscribeBtn = $(".subscribe-btn");
  const unlockGhostApiUrl = 'http://localhost:3000';
  let email = ""

  function subscriptionError(txHash, data) {
    const txHashSection = $("#error-txhash-section");
    const txHashDisplay = $("#error-txhash");
    const errorModal = $("#gh-unlock_error-modal");
    const errorMsgDisplay = $("#error-msg");
    let errorMsg;
    if (data) {
      errorMsg = `${data.message.toUpperCase()}: contact support`;
      errorMsgDisplay.text(errorMsg);
    }
    if (txHash) {
      txHashSection.removeClass("is-hidden");
      txHashDisplay.text(txHash);
    }
    errorModal.addClass("is-active");
  }

  function subscriptionSuccess() {
    const successModal = $("#gh-unlock_success-modal");
    successModal.addClass("is-active");
  }

  const subscribeUser = async (txHash, email, lockAddress) => {
    try {
      const res = await fetch(`${unlockGhostApiUrl}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hash: txHash, email, lockAddress }),
      });
      const data = await res.json();
      if (res.status !== 201) {
        subscriptionError(txHash, data);
      } else {
        subscriptionSuccess();
      }
    } catch (e) {
      console.log("ERR_SUBSCRIBING_USER", e);
    }
  };

  function closeModal($el) {
    $el.removeClass("is-active");
  }

  window.addEventListener("unlockProtocol.closeModal", function (event) {
    subscribeBtn.removeClass("is-loading")
    closeModal(plansModal);
  });

  window.addEventListener("unlockProtocol.metadata", function (event) {
    console.log("TX-META", event.detail[0]);
    email = event.detail[0].metadata.protected.email;
  });
  
  window.addEventListener("unlockProtocol.transactionSent", function (event) {
    const txHash = event.detail.hash;
    const lockAddress = event.detail.lock;
    subscribeUser(txHash, email, lockAddress);
  });
});

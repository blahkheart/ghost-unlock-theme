document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("error-copy-btn");
  const subscribeBtn = $(".subscribe-btn");
  
  /* copy tx hash */
  const handleCopyTxHash = (text) => {
    navigator.clipboard.writeText(text);
  };

  /* click event to trigger copy*/
  copyBtn.addEventListener("click", () => {
    const txHash = document.getElementById("error-txhash").innerText;
    handleCopyTxHash(txHash);
    alert("Tx hash copied");
  });

  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    subscribeBtn.removeClass("is-loading");
    $el.classList.remove("is-active");
  }

  function closeSubscriptionModal($el) {
    closeModal($el);
    location.reload();
  }
  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  /* Function to bind modals to trigger element */
  function bindModalEvents(selector, modalId) {
    (document.querySelectorAll(selector) || []).forEach(($trigger) => {
      const $target = document.getElementById(modalId);

      $trigger.addEventListener("click", (e) => {
        e.preventDefault();
        openModal($target);
      });
    });
  }
  
  /* open plans modal i.e binds plans modal to modal trigger*/
  bindModalEvents(".plans-modal-trigger", "gh-unlock_plans-modal");

  /*close plans modal */
  document
    .querySelectorAll(".plans-modal-background, .plans-modal-close")
    .forEach(($close) => {
      const $target = $close.closest(".gh-unlock_plans-modal");
      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });

  /*close Tx modal */
  document
    .querySelectorAll(".tx-modal-background, .tx-modal-close")
    .forEach(($close) => {
      const $target = $close.closest(".gh-unlock_tx-modal");
      $close.addEventListener("click", () => {
        closeSubscriptionModal($target);
      });
    });

  /*close all modals when esc key is pressed */
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      closeAllModals();
    }
  });
});

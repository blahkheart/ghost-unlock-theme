import { subscribeBtn } from "./settings";

export function closeModal($el) {
  subscribeBtn.forEach((btn) => {
    btn.classList.remove("is-loading");
  });
  $el.classList.remove("is-active");
}

function openModal($el) {
  $el.classList.add("is-active");
}

function fadeInModal(modal) {
  modal.classList.add("gh-unlock-fade-in");
}

function fadeOutModal(modal) {
  modal.classList.add("gh-unlock-fade-out");
  setTimeout(function () {
    modal.classList.remove("gh-unlock-fade-out");
  }, 300); // Match the duration of the fade-out animation
}

document.addEventListener("DOMContentLoaded", () => {
  function closeSubscriptionModal($el) {
    closeModal($el);
    location.reload();
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      fadeOutModal($modal)
      closeModal($modal);
    });
  }

  /* Function to bind modals to trigger element */
  function bindModalEvents(selector, modalId) {
    (document.querySelectorAll(selector) || []).forEach(($trigger) => {
      const $target = document.getElementById(modalId);

      $trigger.addEventListener("click", (e) => {
        e.preventDefault();
        fadeInModal($target);
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

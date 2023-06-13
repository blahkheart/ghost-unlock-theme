document.addEventListener("DOMContentLoaded", () => {
  function closeModal($el) {
    $el.classList.remove("is-active");
    location.reload();
  }

  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".gh-unlock_success-modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });
});

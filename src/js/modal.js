(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden"); // Додаємо або забираємо клас до бекдропу, щоб створити css перехід
    refs.modal.classList.toggle("effect"); // Додаємо клас або забираємо до модального вікна, щоб створити css перехід
    document.body.classList.toggle("no-scroll");
  }
})();

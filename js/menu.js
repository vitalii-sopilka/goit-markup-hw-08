(() => {
  const refs = {
    openMenuBtn: document.querySelector(".min-menu-open-btn"),
    closeMenuBtn: document.querySelector(".min-menu-close-btn"),
    menu: document.querySelector(".header-menu"),
    body: document.querySelector("body"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

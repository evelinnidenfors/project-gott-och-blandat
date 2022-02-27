window.onload = () => {
  const ACTIVE_CLASS = "active";
  const BUTTON = document.querySelectorAll(".faq-toggle");

  if (BUTTON) {
    BUTTON.forEach((toggle) => {
      console.log("clicked");
      toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle(ACTIVE_CLASS);
      });
    });
  }
};

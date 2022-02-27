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

  // BUTTON.onclick = () => {
  //   if (ACTIVE_CLASS) {
  //     document.getElementsByClassName("faq").classList.add(ACTIVE_CLASS);
  //   } else {
  //     document.getElementsByClassName("faq").classList.remove(ACTIVE_CLASS);
  //   }
  // }
};

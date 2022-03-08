window.onload = () => {
  const OPEN = document.getElementById("open");
  const CLOSE = document.getElementById("close");
  const EXPANDED_MENU_CLASS = "expanded";
  const CONTAINER = document.getElementById("container");

  OPEN.addEventListener("click", () => {
    CONTAINER.classList.add(EXPANDED_MENU_CLASS);
  });

  CLOSE.addEventListener("click", () => {
    CONTAINER.classList.remove(EXPANDED_MENU_CLASS);
  });
};

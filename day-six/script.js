window.onload = () => {
  const SHOW_CLASS = "show";

  let boxes = document.querySelectorAll(".box");

  const addShowClass = () =>
    boxes.forEach((box) => {
      if (window.innerHeight + window.scrollY > box.getBoundingClientRect().y) {
        box.classList.add(SHOW_CLASS);
      } else {
        box.classList.remove(SHOW_CLASS);
      }
    });

  addShowClass();

  window.onscroll = () => {
    addShowClass();
  };
};

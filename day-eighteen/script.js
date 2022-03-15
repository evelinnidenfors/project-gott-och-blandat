window.onload = () => {
  const LEFT_BUTTON = document.getElementById("left");
  const RIGHT_BUTTON = document.getElementById("right");
  const ACTIVE_CLASS = "active";

  let activeSlideIndex = 0;

  function indexOfClass(direction) {
    const sliders = document.querySelectorAll(".slider");
    const numberOfSliders = sliders.length;

    if (direction === "right" && sliders[activeSlideIndex]) {
      sliders[activeSlideIndex].classList.remove(ACTIVE_CLASS);
      activeSlideIndex = (activeSlideIndex + 1) % numberOfSliders;
      sliders[activeSlideIndex].classList.add(ACTIVE_CLASS);
    } else if (direction === "left" && sliders[activeSlideIndex]) {
      sliders[activeSlideIndex].classList.remove(ACTIVE_CLASS);
      if (activeSlideIndex === 0) {
        sliders[numberOfSliders - 1].classList.add(ACTIVE_CLASS)
      } else {
        activeSlideIndex = (activeSlideIndex - 1) % numberOfSliders;
        sliders[activeSlideIndex].classList.add(ACTIVE_CLASS);
      }

    }

    console.log(sliders);
  }

  LEFT_BUTTON.addEventListener("click", function setActiveClass() {
    indexOfClass("left");
  });

  RIGHT_BUTTON.addEventListener("click", function setActiveClass() {
    indexOfClass("right");
  });
};

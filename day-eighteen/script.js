window.onload = () => {
  const LEFT_BUTTON = document.getElementById("left");
  const RIGHT_BUTTON = document.getElementById("right");
  const ACTIVE_CLASS = "active";

  let activeSlideIndex = 0;

  function indexOfClass(direction) {
    const sliders = document.querySelectorAll(".slider");
    const numberOfSliders = sliders.length;

    sliders[activeSlideIndex].classList.remove(ACTIVE_CLASS);

    if (direction === "right") {
      activeSlideIndex = (activeSlideIndex + 1) % numberOfSliders;
    } else if (direction === "left") {
      if (activeSlideIndex === 0) {
        activeSlideIndex = numberOfSliders - 1;
      } else {
        activeSlideIndex = (activeSlideIndex - 1) % numberOfSliders;
      }
    }

    sliders[activeSlideIndex].classList.add(ACTIVE_CLASS);
    document.body.style.backgroundImage = sliders[activeSlideIndex].style.backgroundImage;
  }

  LEFT_BUTTON.addEventListener("click", function setActiveClass() {
    indexOfClass("left");
  });

  RIGHT_BUTTON.addEventListener("click", function setActiveClass() {
    indexOfClass("right");
  });
};

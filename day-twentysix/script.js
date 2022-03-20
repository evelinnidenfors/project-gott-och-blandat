window.onload = () => {
  const UP_BTN = document.querySelector(".btn-up");
  const DOWN_BTN = document.querySelector(".btn-down");
  const LEFT_HALF = document.getElementById("left");
  const RIGHT_HALF = document.getElementById("right");
  const IMAGES = document.querySelectorAll(".image");
  const SLIDER_LENGTH = IMAGES.length;

  let activeSlides = 0;
  let transform_y_right = 0;
  let transform_y_left = 0;

  UP_BTN.addEventListener("click", () => changeSlide("up"));
  DOWN_BTN.addEventListener("click", () => changeSlide("down"));

  function changeSlide(direction) {
    const WINDOW_HEIGHT = window.innerHeight;

    if (direction === "up") {
      activeSlides++;
      if (activeSlides > SLIDER_LENGTH - 1) {
        activeSlides = 0;
      }
    } else if (direction === "down") {
      activeSlides--;
      if (activeSlides < 0) {
        activeSlides = SLIDER_LENGTH - 1;
      }
    }

    transform_y_left = WINDOW_HEIGHT * activeSlides;
    transform_y_right = -(WINDOW_HEIGHT * activeSlides);

    RIGHT_HALF.style.transform = `translateY(${transform_y_right}px)`;
    LEFT_HALF.style.transform = `translateY(${transform_y_left}px)`;
  }
};

window.onload = () => {
  const UP_BTN = document.querySelector(".btn-up");
  const DOWN_BTN = document.querySelector(".btn-down");
  const LEFT_HALF = document.getElementById("left");
  const RIGHT_HALF = document.getElementById("right");

  const IMAGES = document.querySelectorAll(".image");

  UP_BTN.addEventListener('click', () => changeSlide('up'));
  DOWN_BTN.addEventListener('click', () => changeSlide('down'));

  function changeSlide(direction) {
    if (direction === 'up') {

    } else if (direction === 'down') {

    }
  }
}
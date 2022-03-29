window.onload = () => {
  const PREV_BTN = document.getElementById("prev-btn");
  const NEXT_BTN = document.getElementById("next-btn");
  const IMAGE_CONTAINER = document.getElementById("image-container");
  const IMAGES = document.querySelectorAll("#image-container > img");
  const IMAGE_LENGTH = IMAGES.length;

  let translateIndex = 0;
  let timer;

  PREV_BTN.addEventListener('click', () => spinCarousel('prev'));

  NEXT_BTN.addEventListener('click', () => spinCarousel('next'));


  function nextSlide() {
    timer = setTimeout(() => spinCarousel('next'), 1000);
  }

  clearTimeout(timer);
  setTimeout(nextSlide(), 500)

  function spinCarousel(direction) {
    if (direction === 'prev') {
      translateIndex += 500;
      if (translateIndex > 0) {
        translateIndex = -(500 * (IMAGE_LENGTH - 1));
      }
    } else if (direction === 'next') {
      translateIndex -= 500;
      if (translateIndex < -(500 * (IMAGE_LENGTH - 1))) {
        translateIndex = 0;
      }
    }

    IMAGE_CONTAINER.style.transform = `translateX(${translateIndex}px)`;
  };

};
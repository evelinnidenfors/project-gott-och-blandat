window.onload = () => {
  const PREV_BTN = document.getElementById("prev-btn");
  const NEXT_BTN = document.getElementById("next-btn");

  PREV_BTN.addEventListener('click', () => {
    console.log('clicked prev');
  });

  NEXT_BTN.addEventListener('click', () => {
    console.log('clicked next');
  });
}
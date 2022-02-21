window.onload = () => {

  const LOADED_CLASS = "loaded";
  let background = document.getElementById("bg");
  background.classList.add(LOADED_CLASS);

  let percentage = document.getElementById("percentage");

  let counter = 0;
  let intervalId;

  const setPercentage = () => {
    if (counter < 101) {
      percentage.innerText = counter++;
    } else {
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(setPercentage, 30);
}
window.onload = () => {
  const JOKE_BTN = document.getElementById("joke_btn");
  const JOKE_TXT = document.getElementById("joke");

  if (JOKE_BTN) {
    console.log("adding listener");
    JOKE_BTN.addEventListener("click", generateJoke);
  }

  generateJoke();

  function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    fetch("https://icanhazdadjoke.com/", config)
      .then((response) => response.json())
      .then((data) => {
        JOKE_TXT.innerHTML = data.joke;
      });
  }
};

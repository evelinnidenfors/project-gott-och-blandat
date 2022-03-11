window.onload = () => {
  const TEXTAREA = document.getElementById("textarea");
  const HIGHLIGHTED_CLASS = "highlighted";

  TEXTAREA.onkeyup = (event) => {
    const INPUT = event.target.value.split(",");
    const TAGS = document.getElementById("tags");

    TAGS.innerHTML = null;

    INPUT.forEach((tag) => {
      if (tag.trim() !== "") {
        const bubble = document.createElement("span");
        bubble.innerText = tag.trim();
        TAGS.appendChild(bubble);
      }
    });

    if (event.key === "Enter" || event.code === "Enter") {
      randomizer();
    }
  };

  function randomizer() {
    TEXTAREA.value = "";
    const SPANS = document.querySelectorAll("#tags span");
    let counter = 0;
    let stopTheCount = SPANS.length + 5;
    let intervalId = setInterval(spinTheWheel, 100);

    function spinTheWheel() {
      counter++;

      if (counter === stopTheCount) {
        clearInterval(intervalId);
      }

      const RAND_SPAN = SPANS[Math.floor(Math.random() * SPANS.length)];
      const HIGHLIGHTED = document.querySelector(`.${HIGHLIGHTED_CLASS}`);

      if (HIGHLIGHTED) {
        HIGHLIGHTED.classList.remove(HIGHLIGHTED_CLASS);
      }

      RAND_SPAN.classList.add(HIGHLIGHTED_CLASS);
    }
  };
};

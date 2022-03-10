window.onload = () => {
  const TEXTAREA = document.getElementById("textarea");

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

    if (event.key === 'Enter' || event.code === 'Enter') {
      const SPANS = document.querySelectorAll("#tags span");
      const RAND_SPAN = SPANS[Math.floor(Math.random() * SPANS.length)];

      RAND_SPAN.style.backgroundColor = "#2b161b";
    }
  };

};

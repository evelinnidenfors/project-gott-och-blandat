window.onload = () => {
  const COUNTERS = document.querySelectorAll(".counter");

  COUNTERS.forEach((counter) => {
    const updateCount = () => {
      const SPEED = 200;
      const TARGET = parseInt(counter.getAttribute('data-target'));
      const COUNT = parseInt(counter.innerText);
      const INCR = Math.trunc(TARGET / SPEED);

      if (COUNT < TARGET) {
        counter.innerText = COUNT + INCR;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = TARGET;
      }
    };
    updateCount();
  });

}
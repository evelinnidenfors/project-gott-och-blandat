window.onload = () => {
  const CARD = document.querySelector(".card");
  let counter = 0;

  CARD.addEventListener('dblclick', function(e) {
    const TIMES = document.getElementById("times");

    counter++;
    console.log(counter);
    TIMES.innerHTML = counter;
  });
}
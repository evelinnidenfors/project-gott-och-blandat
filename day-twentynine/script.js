window.onload = () => {
  const CARD = document.querySelector(".card");
  let counter = 0;

  CARD.addEventListener('dblclick', function(e) {
    const TIMES = document.getElementById("times");

    counter++;
    TIMES.innerText = counter;
    createHeart(e);
  });

  const createHeart= (e) => {
    const HEART = document.createElement('i');
    HEART.classList.add('fas');
    HEART.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = x - e.target.offsetLeft;
    const topOffset = y - e.target.offsetTop;

    HEART.style.top = `${topOffset}px`;
    HEART.style.left = `${leftOffset}px`;

    CARD.appendChild(HEART);

    setTimeout(() => HEART.remove(), 1000)
  }
}
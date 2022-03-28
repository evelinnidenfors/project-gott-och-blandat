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

    const x = e.screenX;
    const y = e.screenY;

    console.log(x, y)
  }
}
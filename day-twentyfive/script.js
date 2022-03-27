window.onload = () => {
  const NAV_BAR = document.querySelector(".navbar");

  document.onscroll = function() {

    if (scrollY >= 100) {
      NAV_BAR.classList.add('scroll');
    } else {
      NAV_BAR.classList.remove('scroll');
    }
  }
}
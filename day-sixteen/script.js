window.onload = () => {
  const GLASSES = document.querySelectorAll(".small-glass");

  updateBigGlass();

  GLASSES.forEach((glass) => {
    const FULL_CLASS = "full";

    glass.addEventListener("click", function fillGlass() {
      if (glass.classList.contains(FULL_CLASS)) {
        glass.classList.remove(FULL_CLASS);
      } else {
        glass.classList.add(FULL_CLASS);
      }
      updateBigGlass();
    });
  });

  function updateBigGlass() {
    const PERCENTAGE = document.getElementById("percentage");
    const NUMBER_OF_GLASSES = document.querySelectorAll(".small-glass").length;
    const NUMBER_OF_FULL_GLASSES = document.querySelectorAll(".full").length;
    const GLASS_VOLUME = 0.25;
    const LITERS_LEFT = document.getElementById("liters");
    const GLASS_MAX = 2;

    if (NUMBER_OF_FULL_GLASSES === 0) {
      PERCENTAGE.style.height = 0;
      PERCENTAGE.style.display = "none";
    } else {
      PERCENTAGE.innerHTML = PERCENTAGE.style.height =
        (NUMBER_OF_FULL_GLASSES / NUMBER_OF_GLASSES) * 100 + "%";
      PERCENTAGE.style.display = "flex";
      LITERS_LEFT.innerHTML = GLASS_MAX - (GLASS_VOLUME * NUMBER_OF_FULL_GLASSES) + "L";
    }
  }
};

window.onload = () => {
  const GLASSES = document.querySelectorAll(".small-glass");
  const FULL_CLASS = "full";

  updateBigGlass();

  GLASSES.forEach((glass) => {

    glass.addEventListener("click", function fillGlass(event) {

      if (glass.classList.contains(FULL_CLASS)) {
        updateNextGlass(event.target.nextElementSibling);
        glass.classList.remove(FULL_CLASS);
      } else {
        updatePreviousGlass(event.target.previousElementSibling);
        glass.classList.add(FULL_CLASS);
      }
      updateBigGlass();
    });
  });

  function updatePreviousGlass(element) {
    if (element == null) {
      return;
    } else {
      element.classList.add(FULL_CLASS);
      updatePreviousGlass(element.previousElementSibling);
    }
  }

  function updateNextGlass(element) {
    if (element == null) {
      return;
    } else {
      element.classList.remove(FULL_CLASS);
      updateNextGlass(element.nextElementSibling);
    }
  }

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
      LITERS_LEFT.innerHTML = 2 + "L";
    } else {
      PERCENTAGE.innerHTML = PERCENTAGE.style.height =
        (NUMBER_OF_FULL_GLASSES / NUMBER_OF_GLASSES) * 100 + "%";
      PERCENTAGE.style.display = "flex";
      LITERS_LEFT.innerHTML =
        GLASS_MAX - GLASS_VOLUME * NUMBER_OF_FULL_GLASSES + "L";
    }
  }
};

window.onload = () => {
  const HTML = document.querySelector("html");
  const TOGGLE = document.querySelector(".toggle");
  const DARK_MODE = "dark";
  const DATE_OUTPUT = document.querySelector(".date");
  const TIME_OUTPUT = document.querySelector(".time");
  const SECONDS_NEEDLE = document.querySelector(".second");
  const MINUTES_NEEDLE = document.querySelector(".minute");
  const HOURS_NEEDLE = document.querySelector(".hour");

  // Setting dark or light mode on click of button
  TOGGLE.addEventListener("click", (e) => {
    if (HTML.classList.contains(DARK_MODE)) {
      HTML.classList.remove(DARK_MODE);
      e.target.innerHTML = "Dark Mode";
    } else {
      HTML.classList.add(DARK_MODE);
      e.target.innerHTML = "Light Mode";
    }
  });

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  function timeMovement() {
    const d = new Date();
    const dayOfWeek = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours();
    const hoursDisplay = hour % 12;
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const am_pm = hour >= 12 ? "PM" : "AM";

    SECONDS_NEEDLE.style.transform = `translate(-50%, -100%) rotate(${360/60 * seconds}deg)`;
    MINUTES_NEEDLE.style.transform = `translate(-50%, -100%) rotate(${360/60 * minutes}deg)`;
    HOURS_NEEDLE.style.transform = `translate(-50%, -100%) rotate(${360/12 * hour}deg)`;

    TIME_OUTPUT.innerHTML = `${hoursDisplay}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${am_pm}`;
    DATE_OUTPUT.innerHTML = `${dayOfWeek}, ${month} <span class="circle">${date}</span>`;
  };
  timeMovement()

  setInterval(timeMovement, 1000);

};

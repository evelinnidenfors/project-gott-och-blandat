window.onload = () => {
  const ACTIVE_CLASS = "active";

  document.getElementById("search-btn").onclick = () => {
    if (
      document.querySelector(".search").className ===
      "search active"
    ) {
      document.getElementById("search-box").classList.remove(ACTIVE_CLASS);
      console.log("inactive");
    } else if (
      document.querySelector(".search").className !==
      "search active"
    ) {
      document.getElementById("search-box").classList.add(ACTIVE_CLASS);
      console.log("active");
    }
  };
};

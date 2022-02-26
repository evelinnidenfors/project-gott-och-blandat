window.onload = () => {
  console.log("loaded")
  const APPLAUSE = document.getElementById("applause");
  const BOO = document.getElementById("boo");
  const GASP = document.getElementById("gasp");
  const TADA = document.getElementById("tada");
  const VICTORY = document.getElementById("victory");
  const WRONG = document.getElementById("wrong");

  document.getElementById("applause_btn").onclick = () => {
    APPLAUSE.play();
  }

  document.getElementById("boo_btn").onclick = () => {
    BOO.play();
  }

  document.getElementById("gasp_btn").onclick = () => {
    GASP.play();
  }

  document.getElementById("tada_btn").onclick = () => {
    TADA.play();
  }

  document.getElementById("victory_btn").onclick = () => {
    VICTORY.play();
  }

  document.getElementById("wrong_btn").onclick = () => {
    WRONG.play();
  }
}
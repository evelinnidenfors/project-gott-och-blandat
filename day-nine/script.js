window.onload = () => {
  console.log("loaded")
  const APPLAUSE_AUDIO = document.getElementById("applause");
  const BOO_AUDIO = document.getElementById("boo");
  const GASP_AUDIO = document.getElementById("gasp");
  const TADA_AUDIO = document.getElementById("tada");
  const VICTORY_AUDIO = document.getElementById("victory");
  const WRONG_AUDIO = document.getElementById("wrong");

  document.getElementById("applause_btn").onclick = () => {
    APPLAUSE_AUDIO.play();
  }

  document.getElementById("boo_btn").onclick = () => {
    BOO_AUDIO.play();
  }

  document.getElementById("gasp_btn").onclick = () => {
    GASP_AUDIO.play();
  }

  document.getElementById("tada_btn").onclick = () => {
    TADA_AUDIO.play();
  }

  document.getElementById("victory_btn").onclick = () => {
    VICTORY_AUDIO.play();
  }

  document.getElementById("wrong_btn").onclick = () => {
    WRONG_AUDIO.play();
  }
}
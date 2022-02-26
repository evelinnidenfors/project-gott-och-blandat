window.onload = () => {
  const audioNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  function setupAudio(audioName) {
    document.getElementById(audioName + "_btn").onclick = () => {
      document.getElementById(audioName).play();
    };
  }

  audioNames.forEach(audioName => {
    setupAudio(audioName);
  });
};

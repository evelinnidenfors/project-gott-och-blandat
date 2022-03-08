window.onload = () => {

  window.addEventListener("keydown", (e) => {
    const CONTAINER = document.getElementById("container");
    const KEY = e.key;
    const CODE = e.code;

    CONTAINER.innerHTML = `
    <div class="wrapper">
      <h3>e.key</h3>
      <div class="box">${e.key === ' ' ? 'Space' : KEY}</div>
    </div>
    <div class="wrapper">
      <h3>e.code</h3>
      <div class="box">${CODE}</div>
    </div>
    `
  })
}
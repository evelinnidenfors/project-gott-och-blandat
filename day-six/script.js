window.onload = () => {
  const SHOW_CLASS = "show";

  let boxes = document.getElementsByClassName("box")
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;

  let scrollPercentage = scrollTop / (docHeight - winHeight);

  let scrollPosition = 0;

  // boxes.foreach(box => )

  console.log(scrollPercentage);

}
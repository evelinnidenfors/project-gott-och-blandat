window.onload = () => {
  const IMAGE = document.getElementById("image");
  const BOXES = document.querySelectorAll(".box");
  const HOVER_CLASS = ' hovering';

  BOXES.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
  });

  function dragEnter(e) {
    e.preventDefault();
    this.className += HOVER_CLASS;
  };

  function dragOver(e) {
    e.preventDefault();
  };

  function dragLeave(e) {
    e.preventDefault();
    this.className = 'box';
  };

  function drop(e) {
    this.append(IMAGE);
  };
}
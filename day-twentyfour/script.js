window.onload = () => {
  const IMAGE_CONTAINER = document.getElementById("image");
  const image_elem = document.createElement("img");
  image_elem.src =
    "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
  const HEADER = document.getElementById("header");
  const PARAGRAPH = document.getElementById("paragraph");

  const AUTHOR_IMAGE_CONTAINER = document.querySelector('.author-img');
  const AUTHOR_IMG = document.createElement('img');
  AUTHOR_IMG.src = 'https://randomuser.me/api/portraits/women/18.jpg'
  const NAME = document.getElementById('name');
  const DATE = document.getElementById('date');

  IMAGE_CONTAINER.appendChild(image_elem);

  HEADER.innerHTML = "Lorem Ipsum";
  PARAGRAPH.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  AUTHOR_IMAGE_CONTAINER.appendChild(AUTHOR_IMG);
  NAME.innerHTML = 'Jane Doe';
  DATE.innerHTML = 'March 20, 2022';
};

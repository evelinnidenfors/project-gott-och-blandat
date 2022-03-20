window.onload = () => {
  const IMAGE_CONTAINER = document.getElementById('image');
  const image_elem = document.createElement('img');
  image_elem.src = 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

  IMAGE_CONTAINER.appendChild(image_elem);
}
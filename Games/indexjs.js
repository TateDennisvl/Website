// JavaScript
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.transform = 'scale(1.2)';
  });

  square.addEventListener('mouseout', () => {
    square.style.transform = 'scale(1)';
  });

  square.addEventListener('click', () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    const newImage = getRandomImage();
    square.dataset.image = newImage;
    square.querySelector('img').src = newImage;
  });
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomImage() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  return images[Math.floor(Math.random() * images.length)];
}
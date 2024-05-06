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

// Get the image element
const rotatingImage = document.querySelector('.blad1');

const initialRotation = 0;
const initialOpacity = 1;

let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', rotateOnScroll);

function rotateOnScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  const isScrollingDown = currentScrollPosition > previousScrollPosition;

  const rotationAngle = isScrollingDown ? initialRotation - 90 : initialRotation;


  const opacity = isScrollingDown ? 0 : initialOpacity;

  rotatingImage.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
  rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
  rotatingImage.style.opacity = opacity;

  previousScrollPosition = currentScrollPosition;
}



